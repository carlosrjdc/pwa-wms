import { Html5Qrcode } from "html5-qrcode";
import { useEffect, useState } from "react";

export default function BuscarQRCode(){
    const [scanResult, setScanResult] = useState(null);

	useEffect(() => {
		const scanner = new Html5Qrcode("reader")

		const config = { fps: 10, qrbox: { width: 250, height: 250 } };

		scanner.start({ facingMode: "environment" },config,success,error)

		function success(result: any) {
			scanner.stop();
			setScanResult(result);
		}

		function error(err: any) {
			console.warn(err);
		}
	}, []);

    return scanResult ? <div>Sucess: {scanResult}</div> : <div id="reader"></div>
}