/** @jsx React.DOM */

var Chart = React.createClass({

  render: function () {

    var divele = document.createElement('div');
    var dataToDraw=new google.visualization.DataTable();
    dataToDraw.addColumn('string', 'Date');
    dataToDraw.addColumn('number', 'Line');
    dataToDraw.addColumn('number', 'Red');
    dataToDraw.addColumn('number', 'Yellow');
    dataToDraw.addColumn('number', 'Green');
    dataToDraw.addRows(this.props.data);
    var chart = new google.visualization.LineChart(divele);

    chart.draw(dataToDraw, {
      legend: {
        position: 'none'
      },
      height: 65,
      width: 170,
      chartArea: {
        width: '100%'
      },
      vAxis: {
        ticks: [0, 1, 2, 3],
        gridlines:{color:'white'},
        baselineColor:'white'
      },
      hAxis:{
        gridlines:{color:'white'},
        textPosition:'none',
        baselineColor:'white'
      },
      series: {
        0: {
          color: 'gray',
          lineWidth: 1,
          pointSize: 0
        },
        1: {
          color: 'red',
          lineWidth: 0,
          pointSize: 5
        },
        2: {
          color: 'yellow',
          lineWidth: 0,
          pointSize: 5
        },
        3: {
          color: 'green',
          lineWidth: 0,
          pointSize: 5
        }

      }
    });
    var todis = divele.innerHTML;

    return ( < div >
      < span dangerouslySetInnerHTML = {
      {
        __html: todis
      }
      }
      />
    </div >
      );
  }

});


  var Tablerow = React.createClass({

    render: function () {
      var channelstats = this.props.channel.points.map(function (time) {
        if (time[1] == 3)
          return ( < td ><img src="../css/green.jpg" height="30" width="30" />< /td>);
        if (time[1] == 2)
          return (< td ><img src="../css/yellow.jpg" height="30" width="30" />< /td>);
        else
          return (< td ><img src="../css/red.jpg" height="30" width="30" />< /td>);
      });

      return ( <tr key={this.props.channel.name}>
                  <td><img src={this.props.channel.icon} height="30" width="90"/>
                  </td>
                  {channelstats}
                  < td >< Chart data = {this.props.channel.graphs.weekly}/></td >
                  < td >< Chart data = {this.props.channel.graphs.monthly}/></td >
                < /tr>);
    }
  });

  var Status=React.createClass({
    render:function(){

    var statuses = this.props.data.map(function(d) {
      return ( < Tablerow channel = {d}/>);
    });

    return (
      <table className="tablecol">
        <thead>
          <th> Channel Name</th >
          <th> Now</th>
          <th> 1 Hour </th>
          <th> 24 Hours </th>
          <th> 1 week </th>
          <th> 1 month </th>
        </thead >
        < tbody >
          {statuses}
        < /tbody>
      </table >
       );
    }
  });

  React.renderComponent(
    < Status data = {dataTab} />
  , document.getElementById('statusholder'));