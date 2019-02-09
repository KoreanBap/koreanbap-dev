Vue.component('ingredientList', {
	props:["ingNum", "ingField"],
	template:"<tr>\
							<td>{{ingNum}}.</td>\
							<td>{{ingField}}</td>\
						</tr>"
});

Vue.component('search', {
	template:'\
	<form class="form-inline">\
		<div class="input-group input-group-lg"">\
			<input class="form-control py-2 border-right-0 border" type="search" id="example-search-input" placeholder="Search your craves">\
		<span class="input-group-append">\
					<div class="input-group-text bg-transparent">\
					<i class="fa fa-search"></i>\
					</div>\
		</span>\
	</div>\
</form>'
});