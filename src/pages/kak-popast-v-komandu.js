import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"kak-popast-v-komandu"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			id="header"
			quarkly-title="Header"
			padding="0px 0px 0px 0px"
			border-width="0px 0px 2px 0px"
			border-style="solid"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
			nout-border-radius="6px"
			lg-position="fixed"
			position="fixed"
			background="#ffffff"
		>
			<Override slot="SectionContent" max-width="none" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				<StackItem
					width="50%"
					display="flex"
					nout-width="70%"
					lg-width="70%"
					sm-width="85%"
				>
					<Override slot="StackItemContent" align-items="flex-start" padding="13px 30px 13px 30px" />
					{"        "}
					<Box display="flex" align-items="center">
						<Link href="/">
							<Image
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
								color="#ffffff"
								width="50px"
								height="50px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text font="normal 600 18px/50px 'AvenirNextCyrRegular', sans-serif" margin="0px 0px 0px 0px" display="inline-block" color="#ffffff">
							<Link href="https://ru.uteam.pro/" color="#000000" text-decoration-line="initial" font="500 18px/50px 'AvenirNextCyrMedium', sans-serif">
								Вакансии в России
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="inline-block"
							color="#9BABBF"
							nout-display="none"
						>
							<Link
								href="http://ua.uteam.pro/"
								color="#9BABBF"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 12px"
							display="inline-block"
							color="#9BABBF"
							nout-display="none"
						>
							<Link
								href="http://en.uteam.pro/"
								color="#9BABBF"
								text-decoration-line="initial"
								hover-color="#ffe02d"
								transition="color 0.2s ease 0s"
							>
								Careers for Foreigners
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					nout-width="30%"
					lg-width="30%"
					sm-width="15%"
				>
					<Override slot="StackItemContent" align-items="center" padding="15px 30px 13px 30px" justify-content="flex-end" />
					<Components.MobileSide
						flex="1 0 auto"
						nout-position="relative"
						nout-z-index="5"
						nout-display="flex"
						nout-justify-content="flex-end"
						nout-align-items="center"
						display="none"
						nout-top="0px"
					>
						<Override
							slot="Content"
							display="flex"
							align-items="center"
							nout-position="fixed"
							nout-top={0}
							nout-left={0}
							nout-z-index="1"
							nout-width="100%"
							nout-height="100%"
							nout-background="white"
							nout-flex-direction="column"
						/>
						<Override
							slot="Button"
							display="none"
							nout-display="flex"
							nout-width="33px"
							nout-height="28px"
							nout-z-index="6"
							nout-top="35px"
							sm-margin="-3px 0px 0px 0px"
						/>
						<Override
							slot="Button Line"
							nout-background="black"
							nout-min-height="3px"
							border-radius="6px"
							nout-position="absolute"
						/>
						<Override
							slot="Button Line1"
							nout-top="4px"
							border-radius="6px"
							nout-width="22px"
							nout-right="0px"
						/>
						<Override slot="Button Line2" nout-top="11px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Line3" nout-top="18px" nout-border-radius="6px" nout-right="0px" />
						<Override slot="Button Line1 :closed" nout-width="22px" />
						<Override slot="Button Line2 :closed" nout-width="22px" />
						<Override slot="Button Line3 :closed" nout-width="22px" />
						<Override slot="Button Line2 :open" nout-opacity="0" nout-width="32px" />
						<Override slot="Button Line1 :open" nout-width="36px" nout-transform="translateY(12px) rotate(225deg)" />
						<Override slot="Button Line3 :open" nout-width="36px" nout-transform="translateY(-12px) rotate(135deg)" />
						<Override slot="Content :closed" nout-opacity="0" nout-transition="transform --transitionDuration-normal step-end 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-transform="translateY(-100%)" />
						<Override slot="Content :open" nout-transform="translateY(0%)" nout-transition="transform --transitionDuration-normal step-start 0s,opacity --transitionDuration-normal --transitionTimingFunction-easeOut" nout-opacity="1" />
						<Override slot="Button :open" nout-position="fixed" />
						<Box
							nout-width="100%"
							nout-display="flex"
							nout-align-items="center"
							nout-padding="0px 0px 0px 0px"
							nout-margin="0px 0px 0px 33px"
						>
							<Image
								width="64px"
								height="64px"
								nout-width="50px"
								nout-height="50px"
								src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/logoblue.svg?v=2021-01-25T20:59:50.954Z"
							/>
							<Text
								flex="0 0 auto"
								margin="0px 0px 0px 0px"
								font="--headline3"
								nout-z-index="6"
								display="none"
								nout-display="block"
								nout-width="90%"
								nout-margin="24px 0px 24px 12px"
								nout-font="normal 500 18px/42px 'AvenirNextCyrMedium', sans-serif"
							>
								Вакансии в России
							</Text>
						</Box>
						<Menu
							flex="1 1 auto"
							display="flex"
							align-items="center"
							justify-content="center"
							nout-flex="0 1 auto"
							nout-flex-direction="column"
							nout-padding="6px 6px 0px 6px"
							nout-margin="15px 0px 0px 0px"
						>
							<Override slot="item-404" display="none" />
							<Override slot="item-index" display="none" nout-display="block" />
							<Override
								slot="link"
								nout-text-decoration-line="initial"
								nout-font="18px AvenirNextCyrRegular, sans-serif"
								nout-letter-spacing=".2px"
								nout-padding="0px 0px 0px 0px"
								nout-color="#263238"
							/>
							<Override slot="item" nout-padding="15px 25px 15px 25px" />
							<Override slot="link-index">
								Главная
							</Override>
						</Menu>
						<StackItem width="70%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								align-items="flex-end"
								padding="13px 30px 14px 30px"
								nout-flex-direction="column"
								nout-justify-content="center"
								nout-align-items="center"
								nout-padding="0px 30px 0px 30px"
							/>
							{"        "}
							<Text
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-padding="15px 25px 15px 25px"
								nout-margin="0px 0px 0px 0px"
							>
								<Link
									href="http://en.uteam.pro/"
									color="#4a8cfa"
									text-decoration-line="initial"
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-padding="0px 0px 0px 0px"
									lg-margin="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
									nout-padding="0px 0px 0px 0px"
								>
									Careers for Foreigners
								</Link>
							</Text>
							<Text
								font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
								margin="3px 0px 0px 22px"
								display="inline-block"
								color="#9BABBF"
								lg-margin="10px 0px 0px 22px"
								nout-margin="0px 0px 0px 0px"
								nout-padding="15px 25px 15px 25px"
							>
								<Link
									href="http://ua.uteam.pro/"
									color="#4a8cfa"
									text-decoration-line="initial"
									hover-color="#3d72cc"
									transition="color 0.2s ease 0s"
									font="300 14px/19px 'AvenirNextCyrMedium'"
									lg-padding="0px 0px 0px 0px"
									lg-margin="0px 0px 0px 0px"
									nout-font="18px AvenirNextCyrRegular, sans-serif"
								>
									Вакансії в Україні{" "}
								</Link>
							</Text>
						</StackItem>
						<StackItem width="30%" display="flex" lg-width="100%" nout-width="100%">
							<Override
								slot="StackItemContent"
								align-items="center"
								padding="13px 30px 14px 30px"
								justify-content="flex-end"
								lg-justify-content="center"
								nout-justify-content="center"
								nout-margin="10px 0px 0px 0px"
							/>
							<Link
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaVk}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://www.facebook.com/ucoz"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaFacebookF}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://twitter.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaTwitter}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="https://instagram.com/ucoz_ru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
							>
								<Icon
									category="fa"
									icon={FaInstagram}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							<Link
								href="http://ok.ru/ucozru"
								target="_blank"
								margin="0px 15px 0px 0px"
								border-color="#AFC1D8"
								color="#AFC1D8"
								border-radius="50%"
								border-width="2px"
								border-style="solid"
								hover-background="#4a8cfa"
								hover-color="#ffffff"
								hover-border-color="#4a8cfa"
								nout-margin="0px 0px 0px 0px"
							>
								<Icon
									category="fa"
									icon={FaOdnoklassniki}
									border-radius="50%"
									padding="5px 5px 5px 5px"
									transition="all 0.2s linear 0s"
									size="20px"
									hover-color="inherit"
									color="inherit"
								/>
							</Link>
							{"        "}
						</StackItem>
					</Components.MobileSide>
					<Menu display="flex" nout-display="none">
						<Override slot="item-404" display="none" />
						<Override slot="link-index" text-decoration-line="initial">
							Главная
						</Override>
						<Override slot="item-active" color="#4a8cfa" />
						<Override slot="link-active" color="#4a8cfa" />
						<Override
							slot="link"
							transition="color 0.3s ease-in-out 0s"
							font="400 16px/24px 'AvenirNextCyrMedium'"
							text-decoration-line="initial"
							color="#263238"
							hover-color="#4a8cfa"
						/>
					</Menu>
					{"        "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="150px 0 80px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/Advice.jpg?v=2021-01-29T22:37:50.668Z) 0% 0% /cover repeat scroll padding-box">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 500 64px/1.2 'AvenirNextCyrDemi', sans-serif"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 30px 0px"
						text-align="center"
						color="#ffffff"
					>
						Как попасть в команду?
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="20px 0 20px 0" sm-padding="110px 0 60px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px" width="100%">
				<StackItem width="100%">
					<Text font="--lead" text-align="center">
						HR хотят переделать этот блок, но еще не знают как
					</Text>
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="60px 0 60px 0" sm-padding="110px 0 60px 0" lg-padding="120px 0 80px 0" background="#eef2f3">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Text
						font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif"
						color="#4a8cfa"
						text-align="center"
						padding="0px 20% 0px 20%"
						margin="0px 0px 30px 0px"
					>
						7 советов, как понравиться нашему HR-менеджеру:{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						01
					</Text>
					<Text font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif" color="#58646f" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						Не забывайте о правилах этикета. На работу можно опоздать, на собеседование — ни в коем случае
					</Text>
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						02
					</Text>
					<Text font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif" color="#58646f" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						На время собеседования отключите телефон или поставьте его на беззвучный режим
					</Text>
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						03
					</Text>
					<Text font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif" color="#58646f" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						Если вы волнуетесь, лучше сразу скажите об этом — это снимет напряжение и точно не испортит впечатление о вас{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						04
					</Text>
					<Text font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif" color="#58646f" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						Говорите правду. Мы обычные люди и искренность нас подкупает всегда и в любых ситуациях{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						05
					</Text>
					<Text font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif" color="#58646f" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						Пожалуйста, узнайте о нашей компании больше — это поможет вам оценить возможности нашего совместного развития{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						06
					</Text>
					<Text font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif" color="#58646f" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						Задавайте нам вопросы.
						<br />
						Любые: о зарплате, отпуске, обеде и том, как быстро влиться в коллектив{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					<Text font="normal 400 48px/54px 'AvenirNextCyrMedium', sans-serif" color="#aec1d9" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						07
					</Text>
					<Text font="normal 300 18px/26px 'AvenirNextCyrRegular', sans-serif" color="#58646f" padding="0px 0px 0px 0px" margin="0px 0px 16px 0px">
						Самое главное — приходите на собеседование в хорошем настроении!{"\n\n"}
					</Text>
				</StackItem>
				<StackItem width="33.333%">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section
			quarkly-title="Footer"
			padding="0px 0px 0px 0px"
			border-width="2px 0px 0px 0px"
			border-style="solid"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
			lg-padding="10px 0px 10px 0px"
		>
			<Override slot="SectionContent" max-width="1170px" width="100%" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				<StackItem width="70%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" align-items="flex-end" padding="13px 30px 14px 30px" />
					{"        "}
					<Box display="flex" align-items="center" lg-flex-direction="column" lg-width="100%">
						<Link href="/">
							<Image
								src="https://screenshot.ukit.com/src/goalov/21/2021-01-27-03-36-00.png"
								color="#ffffff"
								width="121px"
								height="40px"
								margin="3px 10px 3px 3px"
								padding="0px 0px 0px 0px"
							/>
						</Link>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 22px"
						>
							<Link
								href="https://blog.ucoz.ru/"
								color="#AEC1D9"
								text-decoration-line="initial"
								hover-color="#4a8cfa"
								transition="color 0.2s ease 0s"
								font="400 14px/19px 'AvenirNextCyrMedium'"
								target="_blank"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Блог компании
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 22px"
						>
							<Link
								href="http://www.ucoz.ru/all/"
								color="#AEC1D9"
								text-decoration-line="initial"
								hover-color="#4a8cfa"
								transition="color 0.2s ease 0s"
								font="400 14px/19px 'AvenirNextCyrMedium'"
								target="_blank"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Наши проекты
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 22px"
						>
							<Link
								href="http://ua.uteam.pro/"
								color="#4a8cfa"
								text-decoration-line="initial"
								hover-color="#3d72cc"
								transition="color 0.2s ease 0s"
								font="300 14px/19px 'AvenirNextCyrMedium'"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Вакансії в Україні{" "}
							</Link>
						</Text>
						<Text
							font="normal 300 14px/19px 'AvenirNextCyrMedium', sans-serif"
							margin="3px 0px 0px 22px"
							display="inline-block"
							color="#9BABBF"
							lg-margin="10px 0px 0px 22px"
						>
							<Link
								href="http://en.uteam.pro/"
								color="#4a8cfa"
								text-decoration-line="initial"
								hover-color="#3d72cc"
								transition="color 0.2s ease 0s"
								font="300 14px/19px 'AvenirNextCyrMedium'"
								lg-padding="0px 0px 0px 0px"
								lg-margin="0px 0px 0px 0px"
							>
								Careers for Foreigners
							</Link>
						</Text>
					</Box>
				</StackItem>
				<StackItem width="30%" display="flex" lg-width="100%">
					<Override
						slot="StackItemContent"
						align-items="center"
						padding="13px 30px 14px 30px"
						justify-content="flex-end"
						lg-justify-content="center"
					/>
					<Link
						href="https://www.facebook.com/ucoz"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaVk}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							hover-background="inherit"
							size="20px"
							hover-color="inherit"
							color="inherit"
						/>
					</Link>
					<Link
						href="https://www.facebook.com/ucoz"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaFacebookF}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							size="20px"
							hover-color="inherit"
							color="inherit"
						/>
					</Link>
					<Link
						href="https://twitter.com/ucoz_ru"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaTwitter}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							size="20px"
							hover-color="inherit"
							color="inherit"
						/>
					</Link>
					<Link
						href="https://instagram.com/ucoz_ru"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaInstagram}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							size="20px"
							hover-color="inherit"
							color="inherit"
						/>
					</Link>
					<Link
						href="http://ok.ru/ucozru"
						target="_blank"
						margin="0px 15px 0px 0px"
						border-color="#AFC1D8"
						color="#AFC1D8"
						border-radius="50%"
						border-width="2px"
						border-style="solid"
						hover-background="#4a8cfa"
						hover-color="#ffffff"
						hover-border-color="#4a8cfa"
					>
						<Icon
							category="fa"
							icon={FaOdnoklassniki}
							border-radius="50%"
							padding="5px 5px 5px 5px"
							transition="all 0.2s linear 0s"
							size="20px"
							hover-color="inherit"
							color="inherit"
						/>
					</Link>
					{"        "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"601c3c7d7571e39a08c18a0b"}>
				{".active .fileText {\ndisplay: none;\n}\ninput.fileText {\n    opacity: 1 !important;\n}\n* {\n  -webkit-tap-highlight-color: transparent!important;\n}\n@font-face {\n  font-family: 'AvenirNextCyrRegular';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Regular.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrMedium';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Medium.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrBold';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot');\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.eot?#iefix') format('embedded-opentype'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.woff') format('woff'), url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Bold.ttf') format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: 'AvenirNextCyrDemi';\n  src: url('https://ruteam.netlify.app/fonts/AvenirNextCyr-Demi.otf');\n  font-weight: normal;\n  font-style: normal;\n}\nbody {\n  font-family: 'AvenirNextCyrRegular', sans-serif;\n  font-weight: normal;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}"}
			</style>
			<link
				href={"/nubexPrint.css"}
				media={"print"}
				type={"text/css"}
				rel={"stylesheet"}
				place={"endOfHead"}
				rawKey={"601c3cb7f03035695e1bad36"}
			/>
			<style place={"endOfHead"} rawKey={"601c8cac4316710fc00ca4bd"}>
				{".custom-file-input {\n  display:inline-block;\n  position:relative;\n  width:250px;\n  height:30px;\n  background-color:black;\n  color:white;\n  font:normal normal 13px/30px Helmet,FreeSans,Sans-Serif;\n  border-radius:3px;\n  overflow:hidden;\n  cursor:text;\n}\n\n.custom-file-input input {\n  /* sembunyikan dengan `opacity:0` */\n  opacity:0;\n  filter:alpha(opacity=0);\n  /* pastikan elemen ini selalu berada di sebelah atas */\n  display:block;\n  position:absolute;\n  top:0;\n  right:0;\n  margin:0;\n  padding:0;\n  font-size:2000%;\n  z-index:4;\n  cursor:pointer;\n}\n\n.custom-file-input span {\n  display:block;\n  position:absolute;\n  top:0;\n  right:0;\n  bottom:0;\n  left:0;\n  padding:0 10px;\n  overflow:hidden;\n}\n\n.custom-file-input span + span {\n  left:auto;\n  background-color:#234;\n  border-radius:0 3px 3px 0;\n  padding:0 15px;\n  box-shadow:0 0 3px black,0 0 10px black;\n}\n\n\n/* Dora the Explorer */\n\n.custom-file-input input::-ms-value {display:none}\n\n.custom-file-input input::-ms-browse {\n  display:block;\n  margin:0;\n  padding:0;\n  cursor:inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});