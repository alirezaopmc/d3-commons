import * as d3 from "d3";
import { BaseType } from "d3";

export function textInterpolate(e1n, e2n) {
	let e1 = d3.select(e1n);
	let e2 = d3.select(e2n);

	function tr(d=0, t=1000) {
		return d3.transition()
		.duration(t)
		.style("opacity", d);
	}

	e1.transition(tr());
	e2.transition(tr());
}