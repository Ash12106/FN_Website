import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const focusAreas = [
	{
		title: 'Patent Strategy',
		description:
			'Guidance on identifying patentable inventions and navigating the legal landscape of intellectual property.',
		icon: 'gavel',
	},
	{
		title: 'Research Excellence',
		description:
			'Bridging the gap between academic theory and published scholarly excellence in high-impact journals.',
		icon: 'book_4',
	},
	{
		title: 'Product Forge',
		description:
			'Turning blueprinted ideas into functioning prototypes through inter-departmental collaboration.',
		icon: 'precision_manufacturing',
	},
	{
		title: 'Network Synergy',
		description:
			'Connecting students with industry mentors and national-level innovation centers.',
		icon: 'webhook',
	},
];

const clubDomains = [
	{
		id: '01',
		title: 'AI & Robotics',
		leads: 'CSE, CSE (AI/ML), ISE',
		supporting: 'ECE, EEE, ME',
		topics: [
			'Machine Learning & Deep Learning',
			'Autonomous Systems',
			'Computer Vision & NLP',
			'Intelligent Control',
		],
		icon: 'smart_toy',
	},
	{
		id: '02',
		title: 'IoT & Smart Cities',
		leads: 'ECE, EEE, CSE',
		supporting: 'CE, ME, ISE',
		topics: [
			'Smart Infrastructure',
			'Sensor Networks',
			'Urban Tech Platforms',
			'Sustainable Planning',
		],
		icon: 'apartment',
	},
	{
		id: '03',
		title: 'GreenTech & Energy',
		leads: 'EEE, ME, CE',
		supporting: 'CSE, ISE, ECE',
		topics: [
			'Solar & Wind Systems',
			'Energy Storage',
			'Smart Grid Tech',
			'Environmental Monitoring',
		],
		icon: 'eco',
	},
	{
		id: '04',
		title: 'Healthcare & Bio',
		leads: 'ECE, EEE, CSE (AI/ML)',
		supporting: 'ME, ISE, CE',
		topics: [
			'Medical Device Dev',
			'Health Monitoring',
			'Telemedicine Solutions',
			'Signal Processing',
		],
		icon: 'medical_services',
	},
	{
		id: '05',
		title: 'Cyber & Emergency',
		leads: 'CSE, ISE, ECE, AIML',
		supporting: 'EEE, CE, ME',
		topics: [
			'Network Security',
			'Emergency Response',
			'Disaster Mgmt',
			'Infrastructure Protection',
		],
		icon: 'security',
	},
	{
		id: '06',
		title: 'Mechanical & Product',
		leads: 'ME, CE',
		supporting: 'EEE, ECE, CSE/ISE',
		topics: [
			'Advanced Manufacturing',
			'Product Design',
			'Industrial Automation',
			'Materials Engineering',
		],
		icon: 'settings_suggest',
	},
	{
		id: '07',
		title: 'Software & Data Eng',
		leads: 'CSE, ISE, CSE (AI/ML)',
		supporting: 'All Engineering Branches',
		topics: [
			'OS Development',
			'DBMS',
			'Cloud Computing',
			'Big Data Analytics',
		],
		icon: 'database',
	},
	{
		id: '08',
		title: 'Electronics & Comm',
		leads: 'ECE, EEE',
		supporting: 'CSE/ISE, ME, CE',
		topics: [
			'Wireless Systems',
			'Signal Processing',
			'VLSI & Embedded',
			'Network Design',
		],
		icon: 'router',
	},
];

export const Focus: React.FC = () => {
	const containerRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end start'],
	});

	return (
		<section
			ref={containerRef}
			id="focus"
			className="max-w-7xl w-full py-32 px-6 md:px-12 relative overflow-hidden"
		>
			<div className="flex flex-col gap-24 relative z-10">
				{/* Section Header */}
				<div className="text-center space-y-6">
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)]"
					>
						<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
						Core Focus Areas
						<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
					</motion.div>
					<motion.h2
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="text-5xl md:text-8xl font-black font-display uppercase italic tracking-tighter text-white leading-none"
					>
						Strategic <span className="text-gradient">Sectors</span>
					</motion.h2>
					<div className="flex items-center justify-center gap-4 max-w-sm mx-auto">
						<div className="h-[1px] flex-1 bg-linear-to-r from-transparent to-primary/30"></div>
						<p className="text-white/40 text-[10px] font-mono uppercase tracking-[0.2em]">
							RESEARCH DOMAINS
						</p>
						<div className="h-[1px] flex-1 bg-linear-to-l from-transparent to-primary/30"></div>
					</div>
				</div>

				{/* Global Objectives */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{focusAreas.map((area, i) => (
						<motion.div
							key={i}
							whileHover={{ y: -5 }}
							className="glass-card p-8 rounded-[2rem] border-primary/10 bg-white/2 hover:border-primary/40 group transition-all duration-500 relative overflow-hidden"
						>
							<div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-primary/20 group-hover:text-primary transition-colors">
								AREA_0{i + 1}
							</div>
							<div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-primary/20">
								<span className="material-symbols-outlined text-3xl text-primary font-light">
									{area.icon}
								</span>
							</div>
							<h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
								{area.title}
							</h3>
							<p className="text-sm text-white/40 leading-relaxed italic">
								{area.description}
							</p>
							<div className="mt-8 flex items-end justify-end">
								<div className="w-12 h-[2px] bg-primary/20 group-hover:w-20 group-hover:bg-primary transition-all duration-500"></div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Tactical Domains */}
				<div className="space-y-12">
					<div className="flex items-center gap-4">
						<h3 className="text-2xl font-display font-black text-white uppercase tracking-widest italic">
							Nexus{' '}
							<span className="text-primary">Sub-Sectors</span>
						</h3>
						<div className="h-[1px] flex-1 bg-linear-to-r from-primary/40 to-transparent"></div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{clubDomains.map((domain, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
								whileInView={{ opacity: 1, x: 0 }}
								className="group p-8 rounded-[3rem] border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-500 relative overflow-hidden"
							>
								{/* Tactical Backdrop */}
								<div className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary/5 blur-[80px] rounded-full group-hover:bg-primary/10 transition-colors"></div>

								<div className="flex flex-col md:flex-row gap-8 relative z-10">
									<div className="flex flex-col items-center gap-6">
										<div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center group-hover:rotate-180 transition-all duration-700 p-2">
											<div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center border border-primary/30">
												<span className="material-symbols-outlined text-3xl text-primary">
													{domain.icon}
												</span>
											</div>
										</div>
										<div className="text-center">
											<div className="text-[10px] font-mono text-primary/60 uppercase">
												Domain_ID
											</div>
											<div className="text-2xl font-black text-white font-mono tracking-tighter italic">
												{domain.id}
											</div>
										</div>
									</div>

									<div className="flex-1 space-y-6">
										<div className="space-y-2">
											<h4 className="text-3xl font-black text-white uppercase italic tracking-tight group-hover:text-primary transition-colors">
												{domain.title}
											</h4>
											<div className="flex flex-wrap gap-2">
												<span className="text-[10px] font-mono text-white/30 uppercase px-2 py-1 border border-white/10 rounded tracking-tighter">
													LEAD: {domain.leads}
												</span>
												<span className="text-[10px] font-mono text-primary/40 uppercase px-2 py-1 border border-primary/10 rounded tracking-tighter">
													SUPPORT: {domain.supporting}
												</span>
											</div>
										</div>

										<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4">
											{domain.topics.map((topic, idx) => (
												<div
													key={idx}
													className="flex items-center gap-2 group/topic"
												>
													<div className="w-1 h-1 rounded-full bg-primary group-hover/topic:scale-120 transition-transform"></div>
													<span className="text-xs text-white/50 group-hover/topic:text-white/80 transition-colors font-light italic">
														{topic}
													</span>
												</div>
											))}
										</div>

										<button className="w-full py-4 rounded-2xl border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.2em] group-hover:bg-primary group-hover:text-black transition-all duration-300">
											JOIN THIS DOMAIN
										</button>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};
