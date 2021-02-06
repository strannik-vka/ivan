import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your JS here:

const customJs = `
document.querySelector('.file_select').addEventListener('click', function () {
    this.querySelector('input[type="file"]').click();
});
document.querySelector('.file_select [type="file"]').addEventListener('change', function () {
    var names = [];
    for (var i = 0; i < this.files.length; i++) {
        names.push(this.files[i].name);
    }
    document.querySelector('[data-file-name="' + this.getAttribute('name') + '"]').innerHTML = names.join(', ');
    document.querySelector('.file_select').classList.add('active');
});
`;

const EmbedJS = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		const script = document.createElement("script");
		script.innerHTML = customJs;
		ref.current.appendChild(script);
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedJS)({
	name: "EmbedJS",
	normalize: true,
	mixins: true
});