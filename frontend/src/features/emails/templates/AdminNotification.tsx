import {
	Body,
	Button,
	Container,
	Head,
	Heading,
	Html,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import type { SendEmailData } from "../types/types";

interface AdminNotificationProps {
	data: SendEmailData;
}

const AdminNotification = ({ data }: AdminNotificationProps) => {
	return (
		<Html lang="uk" dir="ltr">
			<Tailwind>
				<Head />
				<Body className="bg-[#E7EBFA] font-sans py-[40px]">
					<Container className="bg-white rounded-[16px] max-w-[600px] mx-auto p-[40px] border border-[#d8dee4]">
						<Section className="text-center mb-[32px]">
							<Text className="text-[14px] uppercase tracking-[2px] text-[#9a8c7d] mb-[10px]">
								BLive Coaching | ADMIN
							</Text>
							<Heading className="text-[#242424] text-[28px] font-bold m-0 mb-[16px]">
								Нова реєстрація на навчання
							</Heading>
						</Section>

						<Section
							style={{
								borderLeft: "4px solid #D3C3E0",
								backgroundColor: "#F0F2FA",
								padding: "24px",
								borderRadius: "0 8px 8px 0",
								marginBottom: "32px",
							}}
						>
							<Text className="text-[12px] text-[#9a8c7d] uppercase mb-[16px] font-bold tracking-widest">
								Деталі клієнта
							</Text>

							<Text className="text-[16px] text-[#242424] mb-[8px] m-0">
								<strong>Імʼя:</strong> {data.applicantName}
							</Text>

							<Text className="text-[16px] text-[#242424] mb-[8px] m-0">
								<strong>Email:</strong> {data.applicantEmail}
							</Text>

							<Text className="text-[16px] text-[#242424] m-0">
								<strong>Пакет:</strong> {data.applicantPlan}
							</Text>
						</Section>

						<Section className="mb-[32px]">
							<Text className="text-[16px] text-[#5d544d] leading-[1.6]">
								Юлія, вітаю! У вас новий потенційний клієнт. Система зафіксувала
								інтерес до пакету <strong>«{data.applicantPlan}»</strong>.
							</Text>
							<Text className="text-[16px] text-[#5d544d] leading-[1.6]">
								Рекомендуємо опрацювати цю заявку протягом 24 годин, щоб
								зберегти високу зацікавленість клієнта.
							</Text>
						</Section>

						<Section className="text-center mb-[32px]">
							<Button
								// href="http://localhost:3333/structure/zayavkiVidKliyentiv"
								href="https://be-live-coaching.vercel.app"
								style={{
									backgroundColor: "#D3C3E0",
									color: "#242424",
									padding: "14px 40px",
									borderRadius: "8px",
									fontSize: "15px",
									fontWeight: "bold",
									textDecoration: "none",
									display: "inline-block",
								}}
							>
								Перейти до CRM
							</Button>
						</Section>

						<Section className="border-t border-[#E7EBFA] pt-[24px]">
							<Text className="text-[#9a8c7d] text-[12px] text-center m-0">
								© 2026 BLive Coaching. Всі права захищені.
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	);
};

export default AdminNotification;
