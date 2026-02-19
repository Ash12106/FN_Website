import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from './Button';

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

interface FocusProps {
	onJoinClick?: () => void;
}

export const Focus: React.FC<FocusProps> = ({ onJoinClick }) => {
	return (
		<section id="focus" className="w-full py-32 px-6 md:px-12 relative overflow-hidden">
			{/* Technical Background Layer */}
			<div className="absolute inset-0 pointer-events-none opacity-[0.03]">
				<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:50px_50px]"></div>
			</div>

			<div className="max-w-7xl mx-auto space-y-40 relative z-10">
				{/* Top Objectives Section */}
				<div className="flex flex-col gap-24 relative z-10">
					{/* Section Header */}
					<div className="text-center space-y-8">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-black uppercase tracking-[0.4em] shadow-[0_0_30px_rgba(var(--primary-rgb),0.05)]"
						>
							<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
							Strategic Sectors
							<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
						</motion.div>
						
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="text-6xl md:text-9xl font-black font-display uppercase italic tracking-tighter text-white leading-none whitespace-pre-line"
						>
							Nexus <span className="text-gradient">Focus</span> <br />
							Domains
						</motion.h2>

						<p className="max-w-2xl mx-auto text-white/40 font-light text-sm leading-relaxed uppercase tracking-[0.3em] italic">
							ENGINEERING THE ARCHITECTURE OF INTERDISCIPLINARY EXCELLENCE.
						</p>
					</div>

					{/* Global Objectives - Tactical Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
						{/* Background connecting line */}
						<div className="absolute top-1/2 left-0 w-full h-px bg-primary/5 hidden lg:block -translate-y-1/2"></div>
						
						{focusAreas.map((area, i) => (
							<motion.div
								key={i}
								whileHover={{ y: -8 }}
								className="glass-card p-10 rounded-[2.5rem] border-primary/10 bg-black/40 backdrop-blur-2xl hover:border-primary/60 group transition-all duration-700 relative overflow-hidden"
							>
								{/* Tactical Brackets */}
								<div className="absolute top-4 left-4 w-4 h-4 border-l border-t border-primary/20 group-hover:border-primary transition-all duration-500" />
								<div className="absolute top-4 right-4 w-4 h-4 border-r border-t border-primary/20 group-hover:border-primary transition-all duration-500" />
								<div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-primary/20 group-hover:border-primary transition-all duration-500" />
								<div className="absolute bottom-4 right-4 w-4 h-4 border-r border-b border-primary/20 group-hover:border-primary transition-all duration-500" />

								<div className="absolute top-0 right-0 p-6 font-mono text-[9px] text-primary/20 group-hover:text-primary transition-colors flex items-center gap-2">
									<span className="w-1 h-1 bg-primary/20 group-hover:animate-ping rounded-full" />
									SEGMENT_0{i + 1}
								</div>

								<div className="w-16 h-16 rounded-[1.25rem] bg-black border border-primary/20 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform group-hover:bg-primary group-hover:text-black shadow-2xl">
									<span className="material-symbols-outlined text-4xl font-light transition-colors duration-500">
										{area.icon}
									</span>
								</div>

								<h3 className="text-xl font-black text-white uppercase italic tracking-[0.1em] mb-4 group-hover:text-primary transition-colors">
									{area.title}
								</h3>
								
								<p className="text-xs text-white/40 leading-relaxed uppercase tracking-wider font-light italic group-hover:text-white/70 transition-colors">
									{area.description}
								</p>

								{/* Technical Scanline in individual card */}
								<div className="absolute inset-x-0 bottom-0 h-1 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500 overflow-hidden">
									<motion.div 
										animate={{ x: ['-100%', '100%'] }}
										transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
										className="h-full w-20 bg-primary/60 blur-[4px]"
									/>
								</div>
							</motion.div>
						))}
					</div>

					{/* Tactical Domains - Grid Consolidation */}
					<div className="space-y-16">
						<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-white/5 pb-8">
							<div className="space-y-2">
								<h3 className="text-3xl md:text-5xl font-black font-display text-white uppercase italic tracking-tighter">
									Nexus <span className="text-primary">Sub-Sectors</span>
								</h3>
								<p className="text-[10px] font-mono text-primary/40 uppercase tracking-[0.4em]">Integrated Research Modules</p>
							</div>
							<div className="flex items-center gap-4 text-white/20 font-mono text-[9px] uppercase tracking-[0.2em] hidden md:flex">
								<span>LAT::12.3394_N</span>
								<div className="w-1 h-1 bg-white/10 rounded-full"></div>
								<span>LONG::76.6186_E</span>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
							{clubDomains.map((domain, i) => (
								<motion.div
									key={i}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									className="group p-10 rounded-[3.5rem] border border-primary/10 bg-white/[0.02] hover:bg-primary/[0.02] hover:border-primary/40 transition-all duration-700 relative overflow-hidden"
								>
									{/* Scanning Glow Background */}
									<div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full group-hover:bg-primary/10 transition-all duration-1000"></div>

									<div className="flex flex-col md:flex-row gap-10 relative z-10">
										<div className="flex flex-col items-center gap-8 shrink-0">
											<div className="relative">
												<div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/20 group-hover:border-primary/60 group-hover:rotate-90 transition-all duration-1000 flex items-center justify-center p-2">
													<div className="w-full h-full rounded-full bg-black flex items-center justify-center border border-primary/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
														<span className="material-symbols-outlined text-4xl text-primary group-hover:scale-120 transition-transform">
															{domain.icon}
														</span>
													</div>
												</div>
												<div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-black font-black font-mono text-xs flex items-center justify-center rounded-full border-4 border-black group-hover:scale-110 transition-transform">
													{domain.id}
												</div>
											</div>
										</div>

										<div className="flex-1 space-y-8">
											<div className="space-y-4">
												<h4 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter group-hover:text-gradient transition-all duration-500">
													{domain.title}
												</h4>
												
												<div className="flex flex-wrap gap-3">
													<div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg">
														<span className="text-[8px] font-mono text-primary uppercase">LEAD::</span>
														<span className="text-[10px] font-mono text-white/60 uppercase tracking-tighter">{domain.leads}</span>
													</div>
													<div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 border border-white/5 rounded-lg">
														<span className="text-[8px] font-mono text-primary/40 uppercase">SUPPORT::</span>
														<span className="text-[10px] font-mono text-white/40 uppercase tracking-tighter">{domain.supporting}</span>
													</div>
												</div>
											</div>

											<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-4 border-t border-white/5">
												{domain.topics.map((topic, idx) => (
													<div
														key={idx}
														className="flex items-center gap-3 group/topic"
													>
														<div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover/topic:bg-primary group-hover/topic:scale-125 transition-all duration-300"></div>
														<span className="text-[11px] text-white/30 uppercase tracking-[0.1em] group-hover/topic:text-white/80 transition-colors font-light italic">
															{topic}
														</span>
													</div>
												))}
											</div>
										</div>
									</div>
									
									{/* HUD Corner Decor */}
									<div className="absolute top-6 right-6 w-3 h-3 border-r border-t border-white/10" />
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
