// container/contact-page/Form.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import ButtonContact from '@/components/ButtonContact';
import { useToastStore } from '@/store/useToastStore';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const projectFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	company: z.string().min(1, 'Company name is required'),
	goal: z.string().min(1, 'Goal is required'),
	date: z
		.string()
		.min(1, 'Date is required')
		.regex(/^\d{2}-\d{2}-\d{4}$/, 'Invalid format (DD-MM-YYYY)')
		.refine((val) => {
			const [day, month, year] = val.split('-').map(Number);
			const date = new Date(year, month - 1, day);
			return date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year;
		}, { message: 'Invalid date' }),
	budget: z
		.string()
		.min(1, 'Budget is required')
		.regex(/^\d+(\.\d{2})?$/, 'Invalid format (123.45)'),
	email: z.string().email('Please enter a valid email address'),
	details: z.string().optional(),
});

const generalFormSchema = z.object({
	name: z.string().min(1, 'Name is required'),
	email: z.string().email('Please enter a valid email address'),
	subject: z.string().min(1, 'Subject is required'),
	message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ProjectFormData = z.infer<typeof projectFormSchema>;
type GeneralFormData = z.infer<typeof generalFormSchema>;

type EmailPayload = {
	from_name: string;
	from_email: string;
	subject: string;
	message: string;
};

const getErrorMessage = (error: unknown) => {
	if (typeof error === 'string') {
		return error;
	}

	if (error instanceof Error) {
		return error.message;
	}

	if (error && typeof error === 'object' && 'text' in error) {
		return String((error as { text?: string }).text);
	}

	return null;
};

const Form = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const addToast = useToastStore((state) => state.addToast);
	const [activeTab, setActiveTab] = useState<'project' | 'general'>('general');
	const [isProjectSending, setIsProjectSending] = useState(false);
	const [isGeneralSending, setIsGeneralSending] = useState(false);

	const emailConfig = {
		serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || process.env.EMAILJS_SERVICE_ID,
		templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || process.env.EMAILJS_TEMPLATE_ID,
		publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || process.env.EMAILJS_PUBLIC_KEY,
		toEmail: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL || process.env.EMAILJS_TO_EMAIL || 'verma.07ansh@gmail.com',
	};

	useEffect(() => {
		if (emailConfig.publicKey) {
			emailjs.init({ publicKey: emailConfig.publicKey });
		}
	}, [emailConfig.publicKey]);

	const sendContactEmail = async (payload: EmailPayload) => {
		const { serviceId, templateId, publicKey, toEmail } = emailConfig;

		const missingFields = [];
		if (!serviceId) missingFields.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID');
		if (!templateId) missingFields.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID');
		if (!publicKey) missingFields.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY');

		if (missingFields.length > 0) {
			console.error('Email configuration missing', { emailConfig, missingFields });
			throw new Error(`Missing email configuration: ${missingFields.join(', ')}`);
		}

		const now = new Date();
		const formattedDate = now.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
		const formattedTime = now.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
			hour12: true,
		});

		await emailjs.send(
			serviceId,
			templateId,
			{
				...payload,
				to_email: toEmail,
				reply_to: payload.from_email,
				date: formattedDate,
				time: formattedTime,
			},
			{ publicKey }
		);
	};

	const projectForm = useForm<ProjectFormData>({
		resolver: zodResolver(projectFormSchema),
		mode: 'onChange',
		shouldFocusError: false,
	});

	const generalForm = useForm<GeneralFormData>({
		resolver: zodResolver(generalFormSchema),
		mode: 'onChange',
		shouldFocusError: false,
	});

	const onProjectSubmit = async (data: ProjectFormData) => {
		const { name, company, goal, date, budget, email, details } = data;
		const subject = `Project Inquiry from ${name}`;
		const body =
			`Hi, my name is ${name}\n` +
			`I work with ${company}\n` +
			`I'm looking for a partner to help me with: ${goal}\n` +
			`Aiming to complete it by: ${date}\n` +
			`My budget range is: ${budget}\n` +
			`You can reach me at: ${email}\n` +
			`Additional details: ${details || 'N/A'}`;

		setIsProjectSending(true);

		try {
			await sendContactEmail({
				from_name: name,
				from_email: email,
				subject,
				message: body,
			});
			projectForm.reset();
			addToast('Project inquiry sent successfully!', 'success');
		} catch (error) {
			console.error('Project inquiry send failed', error);
			addToast(getErrorMessage(error) || 'Failed to send project inquiry. Please try again.', 'error');
		} finally {
			setIsProjectSending(false);
		}
	};

	const onGeneralSubmit = async (data: GeneralFormData) => {
		const { name, email, subject, message } = data;
		const emailSubject = `General Inquiry: ${subject}`;
		const body =
			`Hi, my name is ${name}\n` +
			`Email: ${email}\n\n` +
			`Message:\n${message}`;

		setIsGeneralSending(true);

		try {
			await sendContactEmail({
				from_name: name,
				from_email: email,
				subject: emailSubject,
				message: body,
			});
			generalForm.reset();
			addToast('General inquiry sent successfully!', 'success');
		} catch (error) {
			console.error('General inquiry send failed', error);
			addToast(getErrorMessage(error) || 'Failed to send general inquiry. Please try again.', 'error');
		} finally {
			setIsGeneralSending(false);
		}
	};

	const onProjectError = (errorFields: typeof projectForm.formState.errors) => {
		handleFormError(errorFields);
	};

	const onGeneralError = (errorFields: typeof generalForm.formState.errors) => {
		handleFormError(errorFields);
	};

	const handleFormError = (errorFields: any) => {
		const firstErrorField = Object.keys(errorFields)[0];
		if (firstErrorField) {
			const errorMessage = errorFields[firstErrorField as keyof typeof errorFields]?.message;

			if (errorMessage) {
				addToast(errorMessage, 'error');
			}

			const element = document.querySelector(`[name="${firstErrorField}"]`) as HTMLElement;
			if (element) {
				gsap.to(window, {
					duration: 1.2,
					scrollTo: {
						y: formRef.current,
						offsetY: 120,
					},
					ease: 'power2.inOut',
					onComplete: () => {
						element.focus();
					},
				});
			}
		}
	};

	const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedDate = e.target.value; // YYYY-MM-DD from input
		if (selectedDate) {
			const [year, month, day] = selectedDate.split('-');
			const formattedDate = `${day}-${month}-${year}`; // DD-MM-YYYY
			projectForm.setValue('date', formattedDate, { shouldValidate: true });
		}
	};

	return (
		<>
			<style jsx>{`
				@keyframes fadeIn {
					from {
						opacity: 0;
						transform: translateY(10px);
					}
					to {
						opacity: 1;
						transform: translateY(0);
					}
				}
				.animate-fadeIn {
					animation: fadeIn 0.3s ease-in-out;
				}
			`}</style>
			<div className="w-full padding-x padding-y">
			{/* Tab Navigation */}
			<div className="w-full flex gap-4 mb-8 border-b border-black/20 -mt-4">
				<button
					type="button"
					onClick={() => setActiveTab('general')}
					className={`pb-4 px-6 font-NeueMontreal font-normal text-lg transition-all duration-300 ${
						activeTab === 'general'
							? 'text-secondry border-b-2 border-secondry'
							: 'text-secondry/50 hover:text-secondry/80'
					}`}
				>
					General Inquiry
				</button>
				<button
					type="button"
					onClick={() => setActiveTab('project')}
					className={`pb-4 px-6 font-NeueMontreal font-normal text-lg transition-all duration-300 ${
						activeTab === 'project'
							? 'text-secondry border-b-2 border-secondry'
							: 'text-secondry/50 hover:text-secondry/80'
					}`}
				>
					Project Inquiry
				</button>
			</div>

			{/* Project Inquiry Form */}
			{activeTab === 'project' && (
				<form ref={formRef} onSubmit={projectForm.handleSubmit(onProjectSubmit, onProjectError)} className="w-full animate-fadeIn">
					<div className="w-full flex flex-col gap-[15px]">
						<div className="w-full flex gap-[15px] sm:flex-col xm:flex-col md:flex-col">
							<div className="flex gap-[10px] w-[50%] md:w-auto sm:w-auto xm:w-auto sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">Hi! My name is</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="text"
										placeholder="Enter your name*"
										{...projectForm.register('name')}
										className="paragraph bg-transparent w-full font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full"
									/>
									{projectForm.formState.errors.name && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{projectForm.formState.errors.name.message}</p>}
								</div>
							</div>
							<div className="flex gap-[10px] w-[50%] md:w-auto sm:w-auto xm:w-auto sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">, and I work with</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="text"
										placeholder="Company name type here*"
										{...projectForm.register('company')}
										className="paragraph bg-transparent w-full font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out sm:w-full xm:w-full"
									/>
									{projectForm.formState.errors.company && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{projectForm.formState.errors.company.message}</p>}
								</div>
							</div>
						</div>
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">I&apos;m seeking a partner to assist me with</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="text"
										placeholder="Your goal type here*"
										{...projectForm.register('goal')}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
									/>
									{projectForm.formState.errors.goal && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{projectForm.formState.errors.goal.message}</p>}
								</div>
							</div>
						</div>
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">Aiming to have it completed by</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="date"
										onChange={handleDateChange}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
									/>
									<input
										type="hidden"
										{...projectForm.register('date')}
									/>
									{projectForm.formState.errors.date && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{projectForm.formState.errors.date.message}</p>}
								</div>
							</div>
						</div>
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">My budget for this project is approximately</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="text"
										placeholder="123.45*"
										{...projectForm.register('budget')}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
									/>
									{projectForm.formState.errors.budget && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{projectForm.formState.errors.budget.message}</p>}
								</div>
							</div>
						</div>
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">Feel free to reach out to me at</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="email"
										placeholder="anshverma@example.com*"
										{...projectForm.register('email')}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
									/>
									{projectForm.formState.errors.email && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{projectForm.formState.errors.email.message}</p>}
								</div>
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">to discuss further.</h2>
								</div>
							</div>
						</div>
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">Optionally, I&apos;m sharing more:</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="text"
										placeholder="Product details type here..."
										{...projectForm.register('details')}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
									/>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
						<div className="flex sm:flex-col xm:flex-col md:flex-col gap-[25px] mb-12">
							<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
								<ButtonContact
								bgcolor="#35292E"
								title={isProjectSending ? 'sending...' : 'send inquiry'}
								className="bg-white"
								type="submit"
								disabled={isProjectSending}
							/>
							</div>
						</div>
					</div>
				</form>
			)}

			{/* General Inquiry Form */}
			{activeTab === 'general' && (
				<form ref={formRef} onSubmit={generalForm.handleSubmit(onGeneralSubmit, onGeneralError)} className="w-full animate-fadeIn">
					<div className="w-full flex flex-col gap-[15px]">
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">Hi! My name is</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="text"
										placeholder="Enter your name*"
										{...generalForm.register('name')}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
									/>
									{generalForm.formState.errors.name && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{generalForm.formState.errors.name.message}</p>}
								</div>
							</div>
						</div>
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">You can reach me at</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="email"
										placeholder="anshverma@example.com*"
										{...generalForm.register('email')}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
									/>
									{generalForm.formState.errors.email && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{generalForm.formState.errors.email.message}</p>}
								</div>
							</div>
						</div>
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max ">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">I&apos;m reaching out regarding</h2>
								</div>
								<div className="w-full relative pb-5">
									<input
										type="text"
										placeholder="Subject*"
										{...generalForm.register('subject')}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full"
									/>
									{generalForm.formState.errors.subject && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{generalForm.formState.errors.subject.message}</p>}
								</div>
							</div>
						</div>
						<div className="w-full flex gap-[10px]">
							<div className="flex gap-[10px] w-full sm:flex-col xm:flex-col md:flex-col">
								<div className="xl:min-w-max lg:min-w-max">
									<h2 className="sub-heading font-NeueMontreal font-normal text-secondry blend-target">Here&apos;s my message:</h2>
								</div>
								<div className="w-full relative pb-5">
									<textarea
										placeholder="Type your message here*"
										{...generalForm.register('message')}
										rows={1}
										className="paragraph bg-transparent font-NeueMontreal font-normal text-secondry border-b border-black focus:border-secondry text-center sm:text-left xm:text-left outline-none focus:placeholder:opacity-0 mt-[20px] transform transition duration-200 ease-in-out w-full sm:w-full xm:w-full resize-vertical min-h-[1.5em]"
									/>
									{generalForm.formState.errors.message && <p className="absolute left-0 bottom-0 w-full text-red-500 text-xs text-center sm:text-left">{generalForm.formState.errors.message.message}</p>}
								</div>
							</div>
						</div>
					</div>
					<div className="w-full flex items-center justify-end sm:justify-start xm:justify-start pt-[50px]">
						<div className="flex sm:flex-col xm:flex-col md:flex-col gap-[25px] mb-12">
							<div className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
								<ButtonContact
							bgcolor="#35292E"
							title={isGeneralSending ? 'sending...' : 'send message'}
							className="bg-white"
							type="submit"
							disabled={isGeneralSending}
						/>
							</div>
						</div>
					</div>
				</form>
			)}
		</div>
		</>
	);
};

export default Form;
