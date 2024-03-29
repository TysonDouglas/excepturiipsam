import { color } from '@csstools/css-color-parser';
import assert from 'assert';
import { parse } from '../util/parse.mjs';
import { serialize_sRGB_data } from '../util/serialize.mjs';

const tests = [
	['color(srgb 0.81388 0.43646 0.57322)', 'rgb(208, 111, 146)'],
	['color(display-p3 0.81388 0.43646 0.57322)', 'rgb(222, 105, 147)'],
	['color(srgb-linear 0.435 0.017 0.055)', 'rgb(176, 35, 66)'],
	['color(xyz 0.21661 0.14602 0.59452)', 'rgb(118, 84, 205)'],
	['color(xyz-d65 0.21661 0.14602 0.59452)', 'rgb(118, 84, 205)'],
	['color(xyz-d50 0.2005 0.14089 0.4472)', 'rgb(118, 84, 205)'],
	['color(a98-rgb 0.7 0.5 0.3)', 'rgb(196, 129, 72)'],
	['color(prophoto-rgb 0.7 0.5 0.3)', 'rgb(234, 133, 82)'],

	['color(srgb 0.0005556487875468122 0.9999999999999999 -0.00220276712790066)', 'rgb(1, 255, 0)'],
	['color(srgb-linear 0.000043006872101146454 0.9999999999999999 -0.00017049281175701703)', 'rgb(1, 255, 0)'],
	['color(a98-rgb 0.565 1 0.234)', 'rgb(1, 255, 0)'],
	['color(prophoto-rgb 0.5402796954751572 0.9275945561561767 0.30435477084804174)', 'rgb(1, 255, 0)'],
	['color(display-p3 0.45844420720487417 0.9852652233445233 0.29798036139719497)', 'rgb(1, 255, 0)'],
	['color(rec2020 0.5675603321833232 0.9592792129938423 0.2686829491074993)', 'rgb(1, 255, 0)'],
	['color(xyz-d50 0.3851458288094242 0.7168862873215868 0.09696013568183873)', 'rgb(1, 255, 0)'],
	['color(xyz-d65 0.35757130434515494 0.7151655154354521 0.11903355225337156)', 'rgb(1, 255, 0)'],
	['color(xyz 0.35757130434515494 0.7151655154354521 0.11903355225337156)', 'rgb(1, 255, 0)'],

	['color(srgb -0.13610556145124594 0.5177053690420603 0.540031109817831)', 'rgb(0, 131, 136)'],
	['color(srgb-linear -0.01656723676661187 0.23079644121427306 0.25298181882824156)', 'rgb(0, 131, 136)'],
	['color(a98-rgb 0.265 0.5134 0.5344)', 'rgb(0, 131, 136)'],
	['color(prophoto-rgb 0.28284813138491105 0.41695332740189284 0.4586239337463392)', 'rgb(0, 131, 136)'],
	['color(display-p3 0.18049383596973329 0.5091259470889726 0.5339002129941044)', 'rgb(0, 131, 136)'],
	['color(rec2020 0.24657637908526203 0.44994210472189566 0.486194553499425)', 'rgb(0, 131, 136)'],
	['color(xyz-d50 0.11786343156307554 0.1771045882551784 0.2028294891298204)', 'rgb(0, 131, 136)'],
	['color(xyz-d65 0.12135537506539545 0.1797988884168019 0.2676568254682071)', 'rgb(0, 131, 136)'],
	['color(xyz 0.12135537506539545 0.1797988884168019 0.2676568254682071)', 'rgb(0, 131, 136)'],

	['color(srgb 0.8978862558205767 0.4885001647805462 0.9594359763905097)', 'rgb(229, 125, 245)'],
	['color(srgb-linear 0.7832360124544266 0.2035510416163499 0.9101924728483531)', 'rgb(229, 125, 245)'],
	['color(a98-rgb 0.8035122804301492 0.484896415622613 0.9440692746539695)', 'rgb(229, 125, 245)'],
	['color(prophoto-rgb 0.7596595159204217 0.4934889951894072 0.8985832663171222)', 'rgb(229, 125, 245)'],
	['color(display-p3 0.843565234 0.509345345 0.9342344435)', 'rgb(229, 125, 245)'],
	['color(rec2020 0.7728366085950608 0.49153213847089583 0.9202627474826224)', 'rgb(229, 125, 245)'],
	['color(xyz-d50 0.5501693084815327 0.37536346388820246 0.6806345611398199)', 'rgb(229, 125, 245)'],
	['color(xyz-d65 0.5600582450343325 0.37782875858447507 0.904570025128693)', 'rgb(229, 125, 245)'],
	['color(xyz 0.5600582450343325 0.37782875858447507 0.904570025128693)', 'rgb(229, 125, 245)'],
];

for (const test of tests) {
	assert.deepStrictEqual(
		serialize_sRGB_data(color(parse(test[0]))),
		test[1],
		`"${test[0]}" : ${test[1]}`,
	);
}