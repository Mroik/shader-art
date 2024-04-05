precision mediump float;
varying vec2 coord;
uniform float time;

float func(float x) {
	return sin(8.0 * x) / 2.0;
}

void main() {
	float lower = func(coord.x + time);
	float upper = lower + 0.007;
	if(coord.y > lower && coord.y < upper) {
		gl_FragColor = vec4(0.3 * sin(time * 3.0), (0.6 / time) * 2.0, time, 1);
	} else {
		gl_FragColor = vec4(1, 1, 1, 1);
	}
}
