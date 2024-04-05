precision mediump float;
varying vec2 coord;
uniform float time;

float func(float x) {
	return sin(12.0 * x) / 2.0;
}

void main() {
	float lower = func(coord.x + time);
	float upper = lower + 0.007;
	float left = func(coord.y + time);
	float right = left + 0.007;
	bool horizontal = coord.y > lower && coord.y < upper;
	bool vertical = coord.x > left && coord.x < right;
	bool inner_circle = pow(coord.x - 0.0, 2.0) + pow(coord.y - 0.0, 2.0) > 0.3;
	bool outer_circle = pow(coord.x - 0.0, 2.0) + pow(coord.y - 0.0, 2.0) < 0.302;
	bool circle = inner_circle && outer_circle;
	if(horizontal || vertical || circle) {
		gl_FragColor = vec4(0.5 * sin(time * time * 3.0), (0.6 / abs(time) * 3.0) * 2.0, abs(time), 1);
	} else {
		gl_FragColor = vec4(1, 1, 1, 1);
	}
}
