var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/18Xc2DB8xV4qXLrehgfm4j5mUTQIMROY-Ly2O0tpdVoU/pubhtml';
var members={
	robowar: 4,
	roboranger: 4,
	robofifa: 4,
	chasethemaze: 2,
	linefollower: 2,
	dota: 5,
	cs: 5,
	fifa: 1,
	nfs: 1,
	milimitia: 2,
	chess: 1,
	enigma: 3,
	treasurehunt: 3,
	bigshow: 3,
	circuitdesign: 3,
	catia: 2,
	mathemania: 2,
	codefiesta: 2 
};
markup="";

$('#sel1').change(function(){
	init();
})

function init() {
	Tabletop.init( { key: publicSpreadsheetUrl,
		callback: showInfo,
		simpleSheet: true } )
}

function showInfo(data, tabletop) {
			//alert('Successfully processed!')
			//console.log(data);
			markup="";
			var cnt=0;
			//console.log($('#sel1').val()+"ih")
			topMarkup($('#sel1').val());
			markup+="<tbody>";
			for(i=0;i<data.length;i++){
				if(data[i].EventName==$('#sel1').val()){
					cnt+=1;
					markup+="<tr>";
					markup+="<td>"+cnt+"</td>";
					markup+=bodyMarkup(data[i],"TeamName")
					markup+=bodyMarkup(data[i],"Member1")
					markup+=bodyMarkup(data[i],"Member2")
					markup+=bodyMarkup(data[i],"Member3")
					markup+=bodyMarkup(data[i],"Member4")
					markup+=bodyMarkup(data[i],"Member5")
					markup+=bodyMarkup(data[i],"Email")
					markup+=bodyMarkup(data[i],"PhoneNo")
					markup+="</tr>";
				}
			}
			markup+="</tbody>"
			//console.log(markup)
			$('#myTable').html(markup)
			$('#myTable').tableExport({
				bootstrap: true
			});
			$('#myTable').DataTable();

		}

		function topMarkup(eventName){
			markup="<thead><tr><td>Sl. No</td>"
			if(members[eventName]>1){
				markup+="<td>Team Name</td>"
			}
			if(members[eventName]>=1){
				markup+="<td>Member 1</td>"
			}
			if(members[eventName]>1){
				markup+="<td>Member 2</td>"
			}
			if(members[eventName]>2){
				markup+="<td>Member 3</td>"
			}
			if(members[eventName]>3){
				markup+="<td>Member 4</td>"
			}
			if(members[eventName]>4){
				markup+="<td>Member 5</td>"
			}
			markup+="<td>Email</td><td>Contact No</td></tr></thead>"
		}

		function bodyMarkup(dataObj,propName){
			if(dataObj[propName]!='undefined')
				return "<td>"+dataObj[propName]+"</td>";
			else
				return ""
		}

//window.addEventListener('DOMContentLoaded', init)

function exportExcel(){
	//$('#myTable').tableExport({type:'xls',escape:'false'});
}
