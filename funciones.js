var html_nuevo_compas, n_compas_entrada = 0, n_compas_resultado = 0, n_compas, n_negra, n_semi;

function agregarNuevoCompas( donde ) {
	if ( donde == 'entrada' ) {
		n_compas_entrada++;
		n_compas = n_compas_entrada;
	} else {
		n_compas_resultado++;
		n_compas = n_compas_resultado;
	}
	html_nuevo_compas = '<div class="compas compas_' + n_compas + '"><br /><br />';
	for ( n_negra = 1; n_negra < 5; n_negra++ ) {
		html_nuevo_compas += '<div class="negra negra_' + n_negra + '">';
		for ( n_semi = 1; n_semi < 5; n_semi++ ) {
			html_nuevo_compas += '<button class="semi semi_' + n_semi + '">' + n_semi + '</button>';
		}
		html_nuevo_compas += '</div>';
		if ( n_negra != 4 ) { html_nuevo_compas += '--'; }
	}
	html_nuevo_compas += '</div>';
	$("#" + donde).append(html_nuevo_compas);
}

function eliminarCompas( donde ) {
	if ( donde == 'entrada' && n_compas_entrada > 1 ) {
		$("#entrada .compas").last().remove();
		n_compas_entrada--;
	} else if ( donde == 'resultado') {
		$("#resultado").empty();
	}
}

function murguearRitmo() {
	eliminarCompas('resultado');
	n_compas_resultado = 0;
	cantidad_compases = $("#entrada .compas").length;
	var semi = [];
	var combinacion_negra = [];
	for ( n_compas = 1; n_compas <= cantidad_compases; n_compas++ ) {
		agregarNuevoCompas('resultado');
		combinacion_negra[n_compas] = [];
		for ( n_negra = 1; n_negra < 5; n_negra++ ) {
			for ( n_semi = 1; n_semi < 5; n_semi++ ) {
					if ( $("#entrada .compas_" + n_compas + " .negra_" + n_negra + " .semi_" + n_semi).hasClass("si") ) { semi[n_semi] = 1; } else { semi[n_semi] = 0; }
			}
			combinacion_negra[n_compas][n_negra] = 0;
			if ( semi[1] == 1 && semi[2] == 0 && semi[3] == 0 && semi[4] == 0 ) { combinacion_negra[n_compas][n_negra] = 1;
			} else if ( semi[1] == 0 && semi[2] == 1 && semi[3] == 0 && semi[4] == 0 ) { combinacion_negra[n_compas][n_negra] = 2;
			} else if ( semi[1] == 0 && semi[2] == 0 && semi[3] == 1 && semi[4] == 0 ) { combinacion_negra[n_compas][n_negra] = 3;
			} else if ( semi[1] == 0 && semi[2] == 0 && semi[3] == 0 && semi[4] == 1 ) { combinacion_negra[n_compas][n_negra] = 4;
			} else if ( semi[1] == 1 && semi[2] == 1 && semi[3] == 0 && semi[4] == 0 ) { combinacion_negra[n_compas][n_negra] = 5;
			} else if ( semi[1] == 1 && semi[2] == 0 && semi[3] == 1 && semi[4] == 0 ) { combinacion_negra[n_compas][n_negra] = 6;
			} else if ( semi[1] == 1 && semi[2] == 0 && semi[3] == 0 && semi[4] == 1 ) { combinacion_negra[n_compas][n_negra] = 7;
			} else if ( semi[1] == 0 && semi[2] == 1 && semi[3] == 1 && semi[4] == 0 ) { combinacion_negra[n_compas][n_negra] = 8; 
			} else if ( semi[1] == 0 && semi[2] == 1 && semi[3] == 0 && semi[4] == 1 ) { combinacion_negra[n_compas][n_negra] = 9;
			} else if ( semi[1] == 0 && semi[2] == 0 && semi[3] == 1 && semi[4] == 1 ) { combinacion_negra[n_compas][n_negra] = 10;
			} else if ( semi[1] == 1 && semi[2] == 1 && semi[3] == 1 && semi[4] == 0 ) { combinacion_negra[n_compas][n_negra] = 11;
			} else if ( semi[1] == 1 && semi[2] == 1 && semi[3] == 0 && semi[4] == 1 ) { combinacion_negra[n_compas][n_negra] = 12;
			} else if ( semi[1] == 1 && semi[2] == 0 && semi[3] == 1 && semi[4] == 1 ) { combinacion_negra[n_compas][n_negra] = 13;
			} else if ( semi[1] == 0 && semi[2] == 1 && semi[3] == 1 && semi[4] == 1 ) { combinacion_negra[n_compas][n_negra] = 14;
			} else if ( semi[1] == 1 && semi[2] == 1 && semi[3] == 1 && semi[4] == 1 ) { combinacion_negra[n_compas][n_negra] = 15; }
			
			if ( n_negra == 1 ) {
				if ( combinacion_negra[n_compas][n_negra] == 1 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 2 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 3 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 4 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 5 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 6 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 7 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 8 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 9 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 10 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 11 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 12 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 13 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 14 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 15 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				}
			} else if ( n_negra == 2 ) {
				if ( combinacion_negra[n_compas][n_negra] == 1 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 2 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 3 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 4 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 5 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 6 ) {
					if ( combinacion_negra[n_compas][1] == 1 ) {
						$("#resultado .compas_" + n_compas + " .negra_1 .semi_4").addClass("si");
						$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					} else {
						$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
						$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
					}
				} else if ( combinacion_negra[n_compas][n_negra] == 7 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 8 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 9 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 10 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 11 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 12 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 13 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 14 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 15 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				}
			} else if ( n_negra == 3 ) {
				if ( combinacion_negra[n_compas][n_negra] == 1 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 2 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 3 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 4 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 5 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 6 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 7 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 8 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 9 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 10 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 11 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 12 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 13 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 14 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 15 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				}
			} else {
				if ( combinacion_negra[n_compas][n_negra] == 1 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 2 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 3 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 4 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 5 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 6 ) {
					if ( combinacion_negra[n_compas][3] == 1 ) {
						$("#resultado .compas_" + n_compas + " .negra_3 .semi_4").addClass("si");
						$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					} else {
						$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
						$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					}
				} else if ( combinacion_negra[n_compas][n_negra] == 7 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 8 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 9 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 10 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 11 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 12 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 13 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 14 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				} else if ( combinacion_negra[n_compas][n_negra] == 15 ) {
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_1").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_2").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_3").addClass("si");
					$("#resultado .compas_" + n_compas + " .negra_" + n_negra + " .semi_4").addClass("si");
				}
			}
		}
	}
}