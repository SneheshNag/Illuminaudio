//HSL to RGB:
/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @param   {number}  h       The hue
 * @param   {number}  s       The saturation
 * @param   {number}  l       The lightness
 * @return  {Array}           The RGB representation
 */
inlets=3;
outlets=3;

function msg_float(h, s, l){
    var r, g, b;
    if(s == 0){
        r = g = b = l; // achromatic
    }else{
	
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
	
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
	}

/*
		// Declare multiple t's
		var tr = h + 1/3;
		var tg = h;
		var tb = h = 1/3;
		
		// For r
			if (tr < 0) {
				r = tr += 1;
			} else if (tr > 1) {
				r = tr -= 1;
			} else if (tr < 1/6) {
				r = p + (q - p) * 6 * tr;
			} else if (tr < 1/2) {
				r = q;
			} else if (tr < 2/3) {
				r = p + (q - p) * (2/3 - tr) * 6;
			} else {
				r = p;
			}

			// For g
			if (tg < 0) {
				g = tg += 1;
			} else if (tg > 1) {
				g = tg -= 1;
			} else if (tg < 1/6) {
				g = p + (q - p) * 6 * tg;
			} else if (tg < 1/2) {
				g = q;
			} else if (tg < 2/3) {
				g = p + (q - p) * (2/3 - tg) * 6;
			} else {
				g = p;
			}	
		
			// For b
			if (tb < 0) {
				b = tb += 1;
			} else if (tb > 1) {
				b = tb -= 1;
			} else if (tg < 1/6) {
				b = p + (q - p) * 6 * tb;
			} else if (tb < 1/2) {
				b = q;
			} else if (tb < 2/3) {
				b = p + (q - p) * (2/3 - tb) * 6;
			} else {
				b = p;
			}
			*/
	outlet(0, Math.round(h * 255));
	outlet(1, Math.round(s * 255));
    outlet(2, Math.round(l * 255));
}