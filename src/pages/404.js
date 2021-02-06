import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/600e0aca11b69c001f4aa723/images/favicon_uteam.png?v=2021-02-01T19:35:08.128Z"} type={"image/x-icon"} />
		</Helmet>
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
				{"document.addEventListener('DOMContentLoaded', function(){\ndocument.querySelector('.file_select').addEventListener('click', function () {\n    this.querySelector('input[type=\"file\"]').click();\n});\ndocument.querySelector('.file_select [type=\"file\"]').addEventListener('change', function () {\n    var names = [];\n    for (var i = 0; i < this.files.length; i++) {\n        names.push(this.files[i].name);\n    }\n    document.querySelector('[data-file-name=\"' + this.getAttribute('name') + '\"]').innerHTML = names.join(', ');\n    document.querySelector('.file_select').classList.add('active');\n});});"}
			</script>
		</RawHtml>
	</Theme>;
});