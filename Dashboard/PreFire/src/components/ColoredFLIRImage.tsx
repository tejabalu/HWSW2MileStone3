import { getDatabase, ref, get, onValue } from "firebase/database";
import firebaseApp from "../firebase.config";
import { useEffect, useState } from "react";
import { Image, Box } from "@chakra-ui/react";

const db = getDatabase(firebaseApp);
var flirImageColored = ref(db, "coloredFLIRImage");

const useData = () => {
	const [data, setData] = useState([]);
	get(flirImageColored).then((snapshot) => {
		setData(snapshot.val());
	});
	useEffect(() => {
		onValue(flirImageColored, (snapshot) => {
			setData(snapshot.val());
		});
	}, []);
	return data;
};

export const ColoredFLIRImage = () => {
	const data = useData();
	return (
		<Box>
			<Image
				rounded={8}
				src={"data:image/png;base64, " + data.toString()}
				htmlHeight="340px"
				htmlWidth="340px"
			/>
		</Box>
	);
};

export default ColoredFLIRImage;
