import {
	Body,
	Container,
	Head,
	Heading,
	Html,
	Section,
	Tailwind,
	Text,
} from "@react-email/components";
import type { SendEmailData } from "../types/types";

interface ApplicationNotificationProps {
	data: SendEmailData;
}

const ApplicationNotification = ({ data }: ApplicationNotificationProps) => {
	return (
		<Html lang="uk" dir="ltr">
			<Tailwind>
				<Head />
				<Body className="bg-[#E7EBFA] font-sans py-[40px]">
					<Container className="bg-white rounded-[16px] max-w-[600px] mx-auto p-[40px] border border-[#d8dee4]">
						<Section className="text-center mb-[32px]">
							<Text className="text-[14px] uppercase tracking-[2px] text-[#9a8c7d] mb-[10px] m-0">
								BLive Coaching
							</Text>
							<Heading className="text-[#242424] text-[28px] font-bold m-0 mb-[16px]">
								Вітаємо, {data.applicantName}!
							</Heading>
							<Text className="text-[#5d544d] text-[16px] leading-[24px] m-0">
								Дякуємо за довіру до нашої платформи
							</Text>
						</Section>

						<Section className="mb-[32px] text-center">
							<Heading className="text-[#242424] text-[20px] font-semibold m-0 mb-[16px]">
								Заявку підтверджено ✓
							</Heading>
							<Text className="text-[#9a8c7d] text-[16px] mb-[16px] m-0">
								Ви успішно подали заявку на пакет:
							</Text>
							<Section
								style={{
									backgroundColor: "#D3C3E0",
									borderRadius: "8px",
									padding: "16px",
								}}
							>
								<Text className="text-[#242424] text-[18px] font-bold m-0">
									"{data.applicantPlan}"
								</Text>
							</Section>
						</Section>

						<Section className="mb-[32px]">
							<Text className="text-[#5d544d] text-[16px] leading-[26px] m-0">
								Ви зробили цей важливий крок назустріч внутрішнім змінам, і я
								щиро радію, що ми пройдемо цей етап разом. Кожна велика подорож
								починається з одного рішення, і ваше вже прийняте.
							</Text>
						</Section>

						<Section className="mb-[40px]">
							<Heading className=" text-center text-[#242424] text-[20px] font-semibold m-0 mb-[16px]">
								Що далі?
							</Heading>
							<Text className="text-[#5d544d] text-[16px] leading-[26px] m-0">
								Я уважно ознайомлюся з вашою заявкою і зв'яжуся з вами протягом
								найближчих 24 годин, щоб обговорити деталі та обрати зручний час
								для нашої першої зустрічі.
							</Text>
						</Section>

						<Section
							style={{
								borderLeft: "4px solid #D3C3E0",
								backgroundColor: "#F0F2FA",
								padding: "20px",
								borderRadius: "0 8px 8px 0",
								marginBottom: "32px",
							}}
						>
							<Text className="text-[#242424] text-[16px] italic leading-[24px] m-0">
								«Життя стає легшим, коли ми дозволяємо собі бути справжніми. До
								зустрічі в просторі трансформації.»
							</Text>
						</Section>

						<Section className="text-center mb-[32px]">
							<Text className="text-[16px] text-[#5d544d] mb-[4px] m-0">
								З теплом та підтримкою,
							</Text>
							<Text className="text-[18px] font-bold text-[#242424] m-0">
								Юлія Солодюк
							</Text>
							<Text className="text-[14px] text-[#9a8c7d] m-0">
								Ментал-коуч | BLive Coaching
							</Text>
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

export default ApplicationNotification;
