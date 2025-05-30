import { motion } from "framer-motion";
import { Building, Wallet, FileSignature, Receipt } from "lucide-react";

const operationalSteps = [
	{
		icon: <Building className="w-12 h-12" />,
		title: "Înregistrezi firma rapid",
		description:
			"În doar 3 zile, ai firma înființată și toate actele necesare, fără drumuri la instituții.",
	},
	{
		icon: <Wallet className="w-12 h-12" />,
		title: "Deschizi contul bancar",
		description:
			"Îți oferim suport pentru alegerea și deschiderea rapidă a contului la banca dorită.",
	},
	{
		icon: <FileSignature className="w-12 h-12" />,
		title: "Obții semnătura și SPV",
		description:
			"Ne ocupăm de generarea semnăturii electronice și de înregistrarea în Spațiul Privat Virtual.",
	},
	{
		icon: <Receipt className="w-12 h-12" />,
		title: "Facturezi și încasezi simplu",
		description:
			"Ai toate documentele pregătite pentru a emite facturi și a primi plăți imediat.",
	},
];

export default function OperationalSteps() {
	return (
		<section className="py-24 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Left Column - Text and Button */}
					<div>
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<h2 className="text-4xl lg:text-5xl font-bold mb-6">
								De la documente la{" "}
								<span className="text-primaryColor">prima factură</span>
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Odată ce firma este înființată, mai sunt doar câțiva pași pentru a
								deveni complet operațional. De la deschiderea contului bancar și
								până la emiterea primelor facturi, ne asigurăm că ai totul pregătit
							 pentru a-ți gestiona afacerea fără bătăi de cap.
							</p>
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="bg-gradient-to-r from-primaryColor to-secundaryColor text-white 
                         px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg 
                         transition-all duration-300"
							>
								Începe Acum →
							</motion.button>
						</motion.div>
					</div>

					{/* Right Column - Steps Grid */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
						{operationalSteps.map((step, idx) => (
							<motion.div
								key={idx}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: idx * 0.1 }}
								viewport={{ once: true }}
								className="relative bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200"
							>
								{/* Icon */}
								<div className="mb-4 text-primaryColor">{step.icon}</div>

								{/* Title */}
								<h3 className="text-xl font-semibold mb-2 text-gray-900">
									{step.title}
								</h3>

								{/* Description */}
								<p className="text-gray-600">{step.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}