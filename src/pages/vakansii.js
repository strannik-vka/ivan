import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Icon, Button, Hr } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, Section } from "@quarkly/components";
import * as Components from "components";
import { FaVk, FaFacebookF, FaTwitter, FaInstagram, FaOdnoklassniki, FaBoxes, FaFileCode } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"vakansii"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} type={"image/x-icon"} />
		</Helmet>
		{" "}
		<Section
			id="header"
			quarkly-title="Header"
			padding="0px 0px 0px 0px"
			border-width="0px 0px 2px 0px"
			border-style="solid"
			border-color="#dbe6f4"
			transition="all 400ms ease 0s"
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
					</Menu>
					{"        "}
				</StackItem>
				{"        "}
			</Stack>
		</Section>
		<Section padding="150px 0 80px 0" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/vac_head.jpg?v=2021-01-28T20:18:22.116Z) 0% 0% /cover repeat scroll padding-box">
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
						Вакансии
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="0px 0 20px 0" sm-padding="110px 0 60px 0" lg-padding="120px 0 80px 0">
			<Override slot="SectionContent" align-items="center" />
			<Stack margin="0px 0px 0px 0px" max-width="1170px" width="100%">
				<StackItem width="100%">
					<Components.Tabs
						defaultTab="one"
						orientation="Horizontal"
						width="100%"
						height="auto"
						align="center"
						margin="0px 0px 0px 0px"
					>
						<Components.TabList
							sm-width="100%"
							sm-display="flex"
							sm-flex-direction="column"
							padding="0px 0px 0px 0px"
							position="relative"
							top="-90px"
						>
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
						<Components.TabPanels margin="0px 0px 0px 0px">
							<Components.TabPanel tabId="one">
								<Stack margin="0px 0px 0px 0px">
									<StackItem width="100%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"        "}
										<Components.Tabs
											defaultTab="one"
											orientation="Vertical"
											width="100%"
											flex-direction="row-reverse"
											justify-content="space-between"
											height="auto"
										>
											<Components.TabList>
												<Components.TabItem tabId="one">
													<Override slot="Selected Tab" color="#3d72cc" />
													<Override slot="Tab" color="#afc1db" />
													<Button
														background="rgba(0, 119, 204, 0)"
														color="inherit"
														font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
														letter-spacing=".2px"
														display="flex"
														align-items="center"
														padding="8px 24px 8px 12px"
														focus-box-shadow="none"
													>
														<Icon
															category="fa"
															icon={FaBoxes}
															color="#inherit"
															margin="0px 8px 0px 0px"
															size="20px"
														/>
														ВСЕ ВАКАНСИИ (13)
													</Button>
												</Components.TabItem>
												<Components.TabItem tabId="two">
													<Override slot="Selected Tab" color="#3d72cc" />
													<Override slot="Tab" color="#afc1db" />
													<Button
														background="rgba(0, 119, 204, 0)"
														color="inherit"
														font="normal 500 12px/24px 'AvenirNextCyrDemi', sans-serif"
														letter-spacing=".2"
														display="flex"
														align-items="center"
														padding="8px 24px 8px 12px"
														focus-box-shadow="none"
													>
														<Icon
															category="fa"
															icon={FaFileCode}
															size="20px"
															color="inherit"
															margin="0px 8px 0px 0px"
														/>
														РАЗРАБОТКА (6)
													</Button>
												</Components.TabItem>
											</Components.TabList>
											<Components.TabPanels width="90%">
												<Components.TabPanel tabId="one">
													<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
														<Link
															href="/pr-menedzher"
															text-decoration-line="initial"
															color="#263238"
															font="22px 'AvenirNextCyrMedium', sans-serif"
															margin="0px 0px 0px 0px"
															transition="color 0.2s linear 0s"
															hover-color="#4a8cfa"
														>
															PR-менеджер
														</Link>
														<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
															Проект Quarkly | Москва{" "}
														</Text>
														<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
															Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
															<br />
														</Text>
														<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
													</Box>
													<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
														<Link
															href="#"
															text-decoration-line="initial"
															color="#263238"
															font="22px 'AvenirNextCyrMedium', sans-serif"
															margin="0px 0px 0px 0px"
															transition="color 0.2s linear 0s"
															hover-color="#4a8cfa"
														>
															PR-менеджер
														</Link>
														<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
															Проект Quarkly | Москва
														</Text>
														<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
															Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
															<br />
														</Text>
														<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
													</Box>
													<Box width="90%" padding="0px 0px 15px 0px" margin="0px 0px 0px 0px">
														<Link
															href="#"
															text-decoration-line="initial"
															color="#263238"
															font="22px 'AvenirNextCyrMedium', sans-serif"
															margin="0px 0px 0px 0px"
															transition="color 0.2s linear 0s"
															hover-color="#4a8cfa"
														>
															PR-менеджер
														</Link>
														<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrMedium'" color="#333">
															Проект Quarkly | Москва
														</Text>
														<Text margin="12px 0px 0px 0px" font="16px 'AvenirNextCyrRegular', sans-serif" color="#333">
															Мы ищем талантливого PR-щика, серьезно увлеченного вебом. Для продвижения на рынке (в первую очередь англоязычном) проекта Quarkly, ориентированного на профессиональных пользователей (веб-дизайнеров, фронтенд-разработчиков, верстальщиков).
															<br />
														</Text>
														<Hr background="rgb(219, 230, 244)" height="1px" padding="0px 0px 0px 0px" margin="30px 0px 16px 0px" />
													</Box>
												</Components.TabPanel>
												<Components.TabPanel tabId="two">
													<Text>
														Tab 2
													</Text>
												</Components.TabPanel>
											</Components.TabPanels>
										</Components.Tabs>
										{"    "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="two">
								<Stack margin="0px 0px 0px 0px">
									<StackItem width="100%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"            "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="three">
								<Stack margin="0px 0px 0px 0px">
									<StackItem width="100%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"            "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
							<Components.TabPanel tabId="four">
								<Stack margin="0px 0px 0px 0px">
									<StackItem width="100%" display="flex" lg-width="50%" sm-width="100%">
										<Override
											slot="StackItemContent"
											align-items="flex-start"
											justify-content="flex-start"
											flex-direction="column"
											lg-align-items="center"
										/>
										{"            "}
									</StackItem>
									{"        "}
								</Stack>
							</Components.TabPanel>
						</Components.TabPanels>
					</Components.Tabs>
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