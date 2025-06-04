import { motion } from "framer-motion";
import { ClipboardCheck, FileSignature, MailCheck } from "lucide-react";
import Link from "next/link";
const pasi = [
	{
		icon: <ClipboardCheck className="w-12 h-12" />,
		title: "Completezi formularul",
		description:
			"În doar 1 minut, completezi formularul online sau discuți cu un consilier pentru a alege cea mai bună opțiune.",
		duration: "1 minut",
	},
	{
		icon: <FileSignature className="w-12 h-12" />,
		title: "Semnezi actele",
		description:
			"În 30 de minute, rezervăm numele PFA-ului, redactăm documentele necesare și ți le trimitem gata de semnat.",
		duration: "30 minute",
	},
	{
		icon: <MailCheck className="w-12 h-12" />,
		title: "Primești documentele",
		description:
			"În 2-3 zile, certificatul de înregistrare și anexele sunt gata și le primești pe email, semnate digital de ONRC.",
		duration: "2-3 zile",
	},
];

export default function PasiInfiintare() {
	return (
		<section className="py-24 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.3 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2 className="text-4xl font-bold mb-6">
						Trei pași simpli spre{" "}
						<span className="text-primaryColor"> propria ta afacere</span>
					</h2>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8 relative">
					{/* Linie conectoare */}
					<div className="hidden md:block absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-primaryColor to-mediumBlue" />

					{pasi.map((pas, idx) => (
						<motion.div
							key={idx}
							initial={{ opacity: 0, x: -50 }} // Start from the left
							whileInView={{ opacity: 1, x: 0 }} // Move to the center
							transition={{ duration: 0.5, delay: idx * 0.2 }}
							viewport={{ once: true }}
							className="relative"
						>
							{/* Număr pas */}
							<div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-primaryColor to-mediumBlue text-white flex items-center justify-center font-bold">
								{idx + 1}
							</div>

							<div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
								<div className="mb-6 flex justify-center">
									<div className="p-3 rounded-full bg-gradient-to-r from-primaryColor/10 to-mediumBlue/10 text-primaryColor">
										{pas.icon}
									</div>
								</div>

								<h3 className="text-xl font-semibold mb-2 text-center">
									{pas.title}
								</h3>

								<p className="text-gray-600 text-center mb-4">
									{pas.description}
								</p>

								<div className="text-center">
									<span className="inline-block px-4 py-2 rounded-full bg-primaryColor/10 text-primaryColor font-medium text-sm">
										Durată{" "}
										<span className="whitespace-nowrap">
											{pas.duration}
										</span>
									</span>
								</div>
							</div>
						</motion.div>
					))}
				</div>
				<Link href="/contact">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
						viewport={{ once: true }}
						className="mt-16 text-center"
					>
						<button className="bg-gradient-to-r from-primaryColor to-mediumBlue text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
							Începe Procesul →
						</button>
					</motion.div>
				</Link>
			</div>
		</section>
	);
}