var chart1 = new CanvasJS.Chart("chartContainer1",{
    title :{
        text: "Customer Data Analysis"
    },
    data: [{
	type: "line",
        dataPoints : [
	    { label: "Customer1",  y: 10  },
	    { label: "Customer2", y: 15  },
	    { label: "Customer3", y: 25  },
	    { label: "Customer4",  y: 30  },
	    { label: "Customer5",  y: 28  }
	]
    }]
});
var chart2 = new CanvasJS.Chart("chartContainer2",{
    title :{
	text: "Complied Task"
    },
    data: [{
	type: "column",
	dataPoints : [
    { label: "Customer1",  y: 10  },
    { label: "Customer2", y: 15  },
    { label: "Customer3", y: 25  },
    { label: "Customer4",  y: 30  },
    { label: "Customer5",  y: 28  }
	]
    }]
});

chart1.render();
chart2.render();
