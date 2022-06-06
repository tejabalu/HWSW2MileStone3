import { getDatabase, ref, get, onValue } from "firebase/database";
import firebaseApp from "../firebase.config";
import { useEffect, useState } from "react";
import { Text, Image, Box, VStack, theme } from "@chakra-ui/react";

const db = getDatabase(firebaseApp);
var OpticalImg = ref(db, "OpticalImage");

const useData = () => {
	const [data, setData] = useState([]);
	get(OpticalImg).then((snapshot) => {
		setData(snapshot.val());
	});
	useEffect(() => {
		onValue(OpticalImg, (snapshot) => {
			setData(snapshot.val());
		});
	}, []);
	return data;
};

export const OpticalImage = () => {
	const data = useData();
	return (
		<VStack
			justifyContent={"left"}
			align={"left"}
			border={`1px solid ${theme.colors.gray[300]}`}
			p={4}
			backgroundColor={"white"}
			w="50%"
			rounded={8}
			h="100%"
		>
			<Text fontWeight={600} fontSize={"xl"} mb={2}>
				Optical Camera Live View:{" "}
			</Text>
			<Box w="100%" alignItems={"center"} justifyContent={"center"}>
				<Image
					ml="auto"
					mr="auto"
					rounded={8}
					src={"data:image/png;base64, " + data.toString()}
					htmlHeight="400px"
					htmlWidth="400px"
					mb={4}
				/>
			</Box>
		</VStack>
	);
};

export default OpticalImage;
