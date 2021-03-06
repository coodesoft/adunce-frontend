

var app = angular.module('MainApp');



app.directive("afiliadosList",function(){

	return {
		restrict: 'E',
		templateUrl: app.tpl.afiliados + 'list_afiliados.html',
		controller: 'AfiliadosAdmController',
		controllerAs: 'afAdmin' ,
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	};

});

app.directive("addAfiliado", function() {

	return {
		restrict: 'E',
		templateUrl: app.tpl.afiliados +'add_afiliados.html',
		controller: "AfiliadosAdmController",
		controllerAs: 'afAdmin',
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	};
});

app.directive("editAfiliado", function() {

	return {
		restrict: 'E',
		templateUrl: app.tpl.afiliados + 'edit_afiliado.html',
		controller: "AfiliadosAdmController",
		controllerAs: 'afAdmin',
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	};
});


app.directive("loansAfiliados", function(){
	return {
		restrict: 'E',
		templateUrl: app.tpl.afiliados + 'loansAfiliados.html',
		controller: "AfiliadosAdmController",
		link: function($scope, element, attrs){
			$scope.$emit('loaded', element.parents('#rightPane').height());
			$scope.visual.afiliados = [];


			function buildAfiliadoRow(afiliado, ctrl){
				var cuil = afiliado.cuil.split('-');
				var dni = cuil[1];
				cuil = cuil[0] + cuil[1] + cuil[2];

				var tr = '<tr class="'+ctrl+'"><td class="legajo">'+afiliado.legajo+'</td>';
				tr+= '<td class="apellido">'+afiliado.apellido+'</td>';
				tr+= '<td class="nombre">'+afiliado.nombre+'</td>';
				tr+= '<td class="documento"><select>';
				tr+= '<option value="DNI">DNI</option><option value="CI">CI</option><option value="LE">LE</option><option value="LC">LC</option>';
				tr+= '</select></td>';
				tr+= '<td class="nDocumento">'+dni+'</td>';
				tr+= '<td class="importe"><input class="importeInput" value="$0.0" type="text" /></td>';
				tr+= '<td class="concepto">0399</td>';
				tr+= '<td class="cuil">'+cuil+'</td>';
				tr+= '<td class="novedad">-</td>';
				tr+= '</tr>';

				return tr;
			}

			$('body').off('click', '#afiliadosTable input[type="checkbox"]');
			$('body').on('click', '#afiliadosTable input[type="checkbox"]',function(){
				var parent = $(this).parent().parent();
				if ($(this).is(':checked')){
					var afiliado = { 
							'nombre': parent.data('nombre'),
							'apellido': parent.data('apellido'),
							'legajo': parent.data('legajo'),
							'cuil': parent.data('cuil')
					}
					console.log(afiliado);

					var row = buildAfiliadoRow(afiliado, parent.attr('class'));
					$('#newsTable tbody').append(row);
				} else{
					$('#newsTable tr.'+parent.attr('class')).remove();
				}
			});

			$('body').off('click', '#generateNewsFile');
			$('body').on('click', '#generateNewsFile', function(){
				var result = [],
					url = null,
					longs = [6, 20, 20, 4, 9, 10, 4, 11, 1];
				$('#newsFile a').remove();
				$('#newsTable tbody>tr').each(function(){

					var datos = [
					             $(this).children('.legajo').text(),
					             $(this).children('.apellido').text(),
					             $(this).children('.nombre').text(),
					             $(this).find('.documento select').val(),
					             $(this).children('.nDocumento').text(),
					             $(this).find('.importe input').val(),
					             "0399",
					             $(this).children('.cuil').text(),
					             $(this).children('.novedad').text(),
					             ],
					    data="",
					    i=0;

					datos.forEach(function(element, index, array){

						var longMaxima = longs[index];

						if (longMaxima<element.length){
							for(j=0; j<longMaxima; j++)
								data+= element[j];
						} else{
							data+=element;
							for(j=0; j<longMaxima-element.length; j++)
								data+= " ";
						}
						i++
					})

					result.push(data+"\n");
				});
				var file = new Blob(result, {type : 'text/html'});

				if (url !== null) {
				      window.URL.revokeObjectURL(url);
				    }

				url = window.URL.createObjectURL(file);
				$('#newsFile').html('<a href="'+url+'" download="novedades.txt">Descargar</a>');
			})
		}
	}
});

app.directive("massiveLoadAfiliados", function() {

	return {
		restrict: 'E',
		templateUrl: app.tpl.afiliados + 'massive_load_afiliados.html',
		controller: "AfiliadosAdmController",
		link: function(scope, element, attrs){
			scope.$emit('loaded', element.parents('#rightPane').height());
		}
	};
});
