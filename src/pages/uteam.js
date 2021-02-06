import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Icon, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"uteam"} />
		<Helmet>
			<title>
				Команда - Работа в uTeam
			</title>
			<meta name={"description"} content={"uTeam – команда, которая создаёт наши сервисы: uKit, uLanding, uCoz, uCalc. Гордимся не только сервисами, которые создаём, но и тем, что умеем превращать команды профессионалов в настоящих друзей."} />
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
			z-index="99"
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
						<Override slot="link-uteam">
							uTeam
						</Override>
					</Menu>
					{"        "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="120px 0 100px 0" sm-padding="110px 0 0px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="850px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="--headline1"
						margin="0px 0px 5px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						color="#263238"
						sm-font="normal 900 53px/1.2 'AvenirNextCyrBold', sans-serif"
					>
						Команда
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 400 20px/28px 'AvenirNextCyrRegular', sans-serif"
						margin="0px 10px 5px 10px"
						display="inline-block"
						sm-text-align="center"
						sm-margin="0px 0px 0px 0px"
						text-align="center"
						letter-spacing="0.3px"
						sm-font="normal 400 18px/26px 'AvenirNextCyrRegular', sans-serif"
					>
						Мы гордимся не только теми сервисами, которые мы делаем для вас каждый день, но и тем, что умеем превращать профессионалов своего дела в настоящих друзей и членов одной семьи. Посмотрите, как мы живем, — возможно, именно в этой атмосфере и среди этих людей вы окажетесь очень скоро.
						<br />
					</Text>
					{"    "}
				</StackItem>
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Components.Slider width="100%" slides="http://ru.uteam.pro/img/members/new_ourteam_page/24.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/23.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/20.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/19.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/18.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/17.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/16.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/15.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/14.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/13.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/12.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/10.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/09.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/08.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/07.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/06.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/05.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/04.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/03.jpg,http://ru.uteam.pro/img/members/new_ourteam_page/02.jpg">
						<Override
							slot="Slide Description"
							margin="16px 0px 0px 0px"
							background="rgba(0, 0, 0, 0.55)"
							font="400 14px/18px 'AvenirNextCyrMedium'"
							color="#ffffff"
						>
							Slide 1 text
						</Override>
						<Override slot="Slide 1 Description">
							Команда uKit, Ростов-на-Дону
						</Override>
						<Override slot="Slide 2 Description">
							Павел Кудинов, технический директор uKit, руковдитель uKit AI, Ростов-на-Дону
						</Override>
						<Override slot="Slide 3 Description">
							Frontend-разработчики, Луис Бланко и Роман Арестович, Ростов-на-Дону
						</Override>
						<Override slot="Slide 4 Description">
							Команда дизайнеров, Ростов-на-Дону
							<br />
							Андрей Сербуль, Анна Курсанова, Виктор Кадников, Екатерина Чубукова
						</Override>
						<Override slot="Slide 5 Description">
							Дизайнеры, Анна Курсанова и Андрей Сербуль, Ростов-на-Дону
						</Override>
						<Override slot="Slide 6 Description">
							uTeam, Ростов-на-Дону
							<br />
							{" "}Роман Штейнберг, Александр Пезиков, Ирина Черепанова, Павел Кудинов, Михаил Гуревич
						</Override>
						<Override slot="Slide 7 Description">
							uTeam, Ростов-на-Дону
						</Override>
						<Override slot="Slide 8 Description">
							Татьяна Жукова, руководитель направления локализации, Ростов-на-Дону
						</Override>
						<Override slot="Slide 9 Description">
							Дмитрий Молчанов, руководитель проекта uCalc, Ростов-на-Дону
						</Override>
						<Override slot="Slide 10 Description">
							Иван Возлюбленный, scrum-мастер
							<br />
							{" "}Георгий Авсецин, UI/UX-дизайнер Web Tycoon
						</Override>
						<Override slot="Slide 11 Description">
							HR, Ольга Колесникова и Наталья Маринченко, Ростов-на-Дону
						</Override>
						<Override slot="Slide 12 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 13 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 14 Description">
							uTeam, ростовский офис
						</Override>
						<Override slot="Slide 15 Description">
							Михаил Гуревич, финансовый директор uKit Group, Ростов-на-Дону
						</Override>
						<Override slot="Slide 16 Description">
							Финансовый департамент, Москва
							<br />
							Зарина Татрова, Чемарина Алиса, Горбунова Анастасия, Лобаскова Александра
						</Override>
						<Override slot="Slide 17 Description">
							Совещание в головном офис в Москве. Справа – Ирина Черепанова, директор по продукту, Алексей Попов, руководитель техподдержки, Анна Лубенченко и Антон Бурлаков
						</Override>
						<Override slot="Slide 18 Description">
							Олег Лисовенко, менеджер проектов и маркетолог, Санкт-Петербург
						</Override>
						<Override slot="Slide 19 Description">
							uTeam, Санкт-Петербург
						</Override>
						<Override slot="Slide 20 Description">
							Команда uCoz, Черкассы (Украина)
						</Override>
						<Override slot="Points" display="none" />
					</Components.Slider>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="50px 0px 0px 0px" max-width="1170px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="flex-start" justify-content="flex-start" flex-direction="column" />
					{"        "}
					<Components.Tabs
						defaultTab="one"
						orientation="Horizontal"
						width="100%"
						height="auto"
						align="center"
						margin="0px 0px 0px 0px"
					>
						<Components.TabList sm-width="100%" sm-display="flex" sm-flex-direction="column">
							<Override slot="TabList Wrapper" sm-flex-direction="column" />
							<Components.TabItem
								tabId="one"
								color="#263238"
								background="#E4E9ED"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
								border-radius="5px 0px 0px 5px"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									border-width="2px"
									background="#4a8cfa"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-color="rgba(74, 140, 250, 0)"
									border-width="2px"
									border-style="solid"
									color="inherit"
									transition="all 0.2s linear 0s"
									border-radius="5px 0px 0px 5px"
									margin="0px 0px 0px 0px"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
								>
									Москва
								</Button>
							</Components.TabItem>
							<Components.TabItem
								tabId="two"
								background="#E4E9ED"
								color="#263238"
								border-color="#263238"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-radius="0px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 0px 0px 0px"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
								>
									Санкт-Петербург
								</Button>
							</Components.TabItem>
							<Components.TabItem
								tabId="three"
								background="#E4E9ED"
								color="#263238"
								border-color="#263238"
								transition="all 0.2s linear 0s"
								margin="0px 2px 0px 0px"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-radius="0px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 2px 0px 0px"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
								>
									Ростов-на-Дону
								</Button>
							</Components.TabItem>
							<Components.TabItem
								tabId="four"
								background="#E4E9ED"
								color="#263238"
								border-color="#263238"
								transition="all 0.2s linear 0s"
								border-radius="0px 5px 5px 0px"
							>
								<Override
									slot="Selected Tab"
									color="#fff"
									background="#4a8cfa"
									border-width="2px"
									border-style="solid"
									border-color="#4a8cfa"
								/>
								<Override
									slot="Tab"
									border-radius="0px 5px 5px 0px"
									border-width="2px"
									border-style="solid"
									border-color="rgba(0, 0, 0, 0)"
									transition="all 0.2s linear 0s"
									margin="0px 2px 0px 0px"
								/>
								<Button
									background="rgba(0, 119, 204, 0)"
									color="inherit"
									padding="8px 12px 8px 12px"
									font="normal 400 14px/22px 'AvenirNextCyrMedium'"
									border-width="0px"
									transition="all 0.2s linear 0s"
									focus-box-shadow="none"
								>
									Черкассы
								</Button>
							</Components.TabItem>
						</Components.TabList>
						<Components.TabPanels margin="5px 0px 0px 0px">
							<Components.TabPanel tabId="one">
								<Stack margin="40px 0px 0px 0px">
									<StackItem width="40%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Text
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											9 сотрудников
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
										>
											В московском офисе компании находится руководство, команды продуктологов, маркетинга, PR и бухгалтерия.
											<br />
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kurt.jpg?v=2021-01-28T13:05:31.217Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Евгений Курт
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											CEO
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/cherepanova.jpg?v=2021-02-02T11:19:38.438Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Ирина Черепанова
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Директор по продуктам
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/tatrova.jpg?v=2021-02-02T11:19:38.406Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Зарина Татрова
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Главный бухгалтер
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="center"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/popov.jpg?v=2021-02-02T11:19:38.411Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Алексей Попов
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Менеджер проектов
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Box
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
										>
											<Text color="#ffffff" font="500 36px 'AvenirNextCyrBold', sans-serif">
												+5
											</Text>
										</Box>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											специалистов
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="two">
								<Stack margin="40px 0px 0px 0px">
									<StackItem width="40%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Text
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											15 сотрудников
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
										>
											В питерском офисе работает одна из команд uKit. Тут созданы сервисы uSocial, uPartner, Divly.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/lisovenko.jpg?v=2021-02-02T11:26:45.639Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Олег Лисовенко
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Менеджер проектов Divly, uSocial
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/pavlov.jpg?v=2021-02-02T11:26:45.643Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Олег Павлов
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											SMM и direct-маркетолог
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kuznetcov.jpg?v=2021-02-02T11:26:45.640Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Виктор Кузнецов
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Руководитель службы технической поддержки
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Box
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+12
											</Text>
										</Box>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											специалистов
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="three">
								<Stack margin="40px 0px 0px 0px">
									<StackItem width="40%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Text
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											59 сотрудников
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
										>
											В ростовском офисе самая большая команда. Тут разрабатываются проекты uKit, uCalc, uLanding, uWeb и Web Tycoon.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kudinov.jpg?v=2021-02-03T10:12:38.861Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Павел Кудинов
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Технический директор uKit, Руководитель uKit AI
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/gurevich.jpg?v=2021-02-03T10:12:38.856Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Михаил Гуревич
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Финансовый директор
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/zhukova.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Татьяна Жукова
											<br />
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Руководитель
											<br />
											отдела локализации
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/mudrov.jpg?v=2021-02-03T10:12:38.864Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Евгений Мудров
											<br />
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Разработчик ядра uKit AI
											<br />
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/derbitov.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Андрей Дербитов
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Старший разработчик uLanding
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kadnikov.jpg?v=2021-02-03T10:12:38.858Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Виктор Кадников
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Арт-директор uKit
											<br />
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Box
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+53
											</Text>
										</Box>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											специалистов
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="four">
								<Stack margin="40px 0px 0px 0px">
									<StackItem width="40%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Text
											font="normal 400 30px/36px 'AvenirNextCyrBold', sans-serif"
											margin="0px 0px 18px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="center"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											25 сотрудников
										</Text>
										<Text
											font="normal 400 18px/26px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 5px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
											lg-text-align="center"
										>
											Исторически самый первый офис компании. Здесь разрабатывается легендарный uCoz, а также uID.me и uShop.
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/kolpakov.jpg?v=2021-02-03T12:07:48.618Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Иван Колпаков
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Технический директор uCoz
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/donets.jpg?v=2021-02-03T12:07:48.614Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Алексей Донец
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Интернет-маркетолог,
											<br />
											SEO-специалист
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/latanuk.jpg?v=2021-02-03T12:07:48.614Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Иван Латанюк
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Старший разработчик uCoz, uID.me
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/pereyaslovets.jpg?v=2021-02-03T12:07:48.623Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Наталья Переясловец
											<br />
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Старший QA-инженер
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Image
											width="90px"
											height="90px"
											margin="0px 0px 24px 0px"
											src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/chubenko.jpg?v=2021-02-03T12:07:48.638Z"
											border-radius="100%"
										/>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											Игорь Чубенко
										</Text>
										<Text
											font="normal 400 14px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 0px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#9BABBF"
										>
											Старший разработчик uShop
										</Text>
										{"    "}
									</StackItem>
									<StackItem width="20%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
											lg-justify-content="center"
										/>
										{"        "}
										<Box
											margin="0px 0px 24px 0px"
											width="90px"
											height="90px"
											border-radius="50%"
											background="#3D72CC"
											display="flex"
											align-items="center"
											justify-content="center"
										>
											<Text font="500 36px 'AvenirNextCyrBold', sans-serif" color="#ffffff">
												+20
											</Text>
										</Box>
										<Text
											font="normal 400 18px/18px 'AvenirNextCyrMedium', sans-serif"
											margin="0px 0px 12px 0px"
											display="inline-block"
											sm-text-align="center"
											sm-margin="0px 0px 30px 0px"
											text-align="left"
											letter-spacing="0.3px"
											color="#3D72CC"
										>
											специалистов
										</Text>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
						</Components.TabPanels>
					</Components.Tabs>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 75px 0" background="#3D72CC" md-padding="40px 0 40px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%" gap="--cmp-stack-gap-default">
				{"    "}
				<StackItem
					width="33.333%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-margin="0px 0px 17px 0px"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						от 3-x лет
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						опыта на своей позиции у каждого ключевого участника команды
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-margin="0px 0px 17px 0px"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						15 лет
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						на рынке SaaS-решений для создания сайтов и оптимизации их конверсии
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="33.333%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-margin="0px 0px 17px 0px"
				>
					<Override slot="StackItemContent" align-items="center" justify-content="flex-start" flex-direction="column" />
					<Text font="42px/28px 'AvenirNextCyrBold', sans-serif" margin="0px 0px 16px 0px" color="#fff">
						7 проектов
					</Text>
					<Text font="18px/28px 'AvenirNextCyrMedium', sans-serif" margin="8px 0px 0px 0px" text-align="center" color="#fff">
						выпущены совместно и успешно работают
						<br />
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="60px 0 80px 0" sm-padding="30px 0 40px 0" background="#eef2f3">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="975px" width="100%">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					{"        "}
					<Text
						font="normal 500 36px/40px 'AvenirNextCyrBold', sans-serif"
						margin="0px 0px 40px 0px"
						display="inline-block"
						sm-text-align="center"
						sm-font="normal 500 24px/30px 'AvenirNextCyrBold', sans-serif"
						sm-margin="0px 0px 0px 0px"
						md-margin="0px 0px 0px 0px"
					>
						Последние новости из блогов
						<br />
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="10px 0px 0px 0px" max-width="1170px" width="100%">
				{"        "}
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-align-items="center"
					/>
					<Link href="https://blog.ucoz.ru/" target="_blank">
						<Image margin="0px 0px 0px 0px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucozuco.svg?v=2021-02-03T15:17:23.120Z" />
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="flex-start"
						flex-direction="column"
						padding="0px 0px 0px 0px"
						md-align-items="center"
					/>
					<Link href="https://blog-ru.ukit.com/" target="_blank">
						<Image margin="0px 0px 0px 0px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ukituco.svg?v=2021-02-03T15:44:44.464Z" />
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/14828273.jpg?v=2021-02-03T13:44:49.980Z"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						С Наступающим Новым годом!
					</Text>
					<Link
						href="https://blog.ucoz.ru/ucoz/new-year-2021"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						md-margin="20px 0px 0px 0px"
						nout-margin="20px 0px 0px 0px"
						sm-margin="20px 0px 0px 0px"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/20886398%20(1).png?v=2021-02-03T15:47:32.977Z"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Подводим итоги 2020 и встречаем Новый год со скидками!
					</Text>
					<Link
						href="https://blog-ru.ukit.com/newsline/new-year-2021"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%" md-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/57744999.png?v=2021-02-03T15:47:32.979Z"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Нам 15 лет! Празднуем и ностальгируем вместе!
					</Text>
					<Link
						href="https://blog.ucoz.ru/ucoz/15-years"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					sm-width="100%"
					md-width="100%"
					md-order="1"
				>
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="space-between"
						flex-direction="column"
						background="#ffffff"
						padding="20px 20px 30px 20px"
					/>
					<Image
						width="100%"
						margin="0px 0px 18px 0px"
						height="100%"
						max-height="146px"
						src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/05479122.png?v=2021-02-03T15:47:52.340Z"
					/>
					<Text margin="0px 0px 12px 0px" font="20px/28px 'AvenirNextCyrMedium', sans-serif" nout-font="20px/23px 'AvenirNextCyrMedium', sans-serif" sm-font="16px/20px 'AvenirNextCyrMedium', sans-serif">
						Большое обновление виджетов и новые шаблоны
					</Text>
					<Link
						href="https://blog-ru.ukit.com/updates/new-templates-and-widgets"
						text-decoration-line="initial"
						color="#4A8CFA"
						font="20px/28px 'AvenirNextCyrMedium', sans-serif"
						target="_blank"
						hover-text-decoration-line="underline"
						transition="all 0.2s ease 0s"
						nout-margin="20px 0px 0px 0px"
					>
						Читать далее
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section padding="40px 0 40px 0">
			<Stack margin="10px 0px 0px 0px" max-width="1170px" width="100%">
				{"        "}
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="row"
						align-items="flex-start"
						sm-align-items="center"
						sm-justify-content="center"
					/>
					<Link
						href="https://www.instagram.com/ucoz_ru/"
						display="flex"
						align-items="center"
						text-decoration-line="initial"
						target="_blank"
						transition="color 0.2s ease 0s"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						color="#263238"
						hover-color="#4A8CFA"
					>
						<Icon category="fa" icon={FaInstagram} margin="-1px 12px 0px 0px" />
						<Text margin="0px 0px 0px 0px">
							Жизнь команды в Instagram
						</Text>
					</Link>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" sm-width="100%">
					<Override
						slot="StackItemContent"
						flex-direction="row"
						align-items="center"
						justify-content="flex-end"
						sm-justify-content="center"
					/>
					<Link
						href="https://vk.com/ucoz"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						text-decoration-line="initial"
						color="#263238"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s ease 0s"
						hover-color="#4A8CFA"
						target="_blank"
						margin="0px 24px 0px 0px"
					>
						uCoz в ВК
						<Image width="100px" height="100px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/ucoz.png?v=2021-02-01T22:05:06.991Z" margin="18px 0px 0px 0px" />
					</Link>
					<Link
						href="https://vk.com/ucoz"
						display="flex"
						align-items="center"
						flex-direction="column"
						justify-content="center"
						text-decoration-line="initial"
						color="#263238"
						font="18px 'AvenirNextCyrMedium', sans-serif"
						transition="color 0.2s ease 0s"
						hover-color="#4A8CFA"
						target="_blank"
					>
						uKit в ВК
						<Image width="100px" height="100px" src="https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/5.png?v=2021-01-28T01:00:02.248Z" margin="18px 0px 0px 0px" />
					</Link>
					{"            "}
				</StackItem>
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
							lg-margin="10px 0px 0px 0px"
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
							lg-margin="10px 0px 0px 0px"
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
							lg-margin="10px 0px 0px 0px"
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
							lg-margin="10px 0px 0px 0px"
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
			<script
				src={""}
				type={""}
				referrerpolicy={""}
				place={"endOfBody"}
				rawKey={"601edfb422a983df27535bf9"}
			>
				{"alert(4);\neval(function(p,a,c,k,e,r){e=function(c){return c.toString(a)};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\\\b'+e(c)+'\\\\b','g'),k[c]);return p}('1.4(\\'e\\',5(){1.2(\\'.6\\').4(\\'9\\',5(){3.2(\\'f[b=\"7\"]\\').9()});1.2(\\'.6 [b=\"7\"]\\').4(\\'g\\',5(){c a=[];h(c i=0;i<3.d.j;i++){a.k(3.d[i].8)}1.2(\\'[l-7-8=\"\\'+3.m(\\'8\\')+\\'\"]\\').n=a.o(\\', \\');1.2(\\'.6\\').p.q(\\'r\\')})});',28,28,'|document|querySelector|this|addEventListener|function|file_select|file|name|click||type|var|files|DOMContentLoaded|input|change|for||length|push|data|getAttribute|innerHTML|join|classList|add|active'.split('|'),0,{}))"}
			</script>
		</RawHtml>
	</Theme>;
});