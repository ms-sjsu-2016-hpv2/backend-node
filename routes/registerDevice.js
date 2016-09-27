/**
 * Created by stealz on 9/22/16.
 */

exports.registerDevice = function(req, res) {

    var device_name, cpu_info;

    device_name = req.param("version");
    cpu_info = req.param("cpuinfo");


    //console.log(device_name +" dedededede");
    //console.log(cpu_info +" dedededeadsfdsfdsdsfdsfdsfdsfdsf");
    //ip_address = req.param("ip_address");


    var response = {"github_url":"https://github.com/jvedang/cmpe295.git"};
    // if(device_name === "edison" || device_name === "rasberry_pi" || device_name === "mediatek") {
    //     //store the ip_address
    //
    //     res.send(response);
    // } else {
    //     res.send(response);
    // }

    res.send(response);
};