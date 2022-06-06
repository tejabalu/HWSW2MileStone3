import { getDatabase, ref, get, onValue } from "firebase/database";
import firebaseApp from "../firebase.config";
import { useEffect, useState } from "react";
import { Text, Image, Box, VStack, theme, HStack } from "@chakra-ui/react";
import TempRange from "../assets/x69n3.png";

const db = getDatabase(firebaseApp);
var flirImage = ref(db, "FLIRImage");
var MAXTemp = ref(db, "MAXTemp");
var MINTemp = ref(db, "MINTemp");

const MAXTempData = () => {
	const [data, setData] = useState(0);
	useEffect(() => {
		onValue(MAXTemp, (snapshot) => {
			setData(snapshot.val());
		});
		console.log("Api called");
	}, [data]);
	return data;
};

const MinTempData = () => {
	const [data, setData] = useState(0);
	useEffect(() => {
		onValue(MINTemp, (snapshot) => {
			setData(snapshot.val());
		});
		console.log("Api called");
	}, [data]);
	return data;
};

const useData = () => {
	const [data, setData] = useState([]);
	get(flirImage).then((snapshot) => {
		setData(snapshot.val());
	});
	useEffect(() => {
		onValue(flirImage, (snapshot) => {
			setData(snapshot.val());
		});
		console.log("Api called");
	}, []);
	return data;
};

export const FLIRImage = () => {
	const data = useData();
	return (
		<VStack
			backgroundColor={"white"}
			justifyContent="left"
			align={"left"}
			p={4}
			w="50%"
			h="100%"
			rounded={8}
			border={`1px solid ${theme.colors.gray[300]}`}
		>
			<Text fontWeight={600} fontSize={"xl"}>
				Thermal Camera Live View:
			</Text>
			<Box w={"100%"} alignItems="center" justifyContent="center">
				<Image
					mt={4}
					ml="auto"
					mr="auto"
					rounded={8}
					src={"data:image/png;base64, " + data.toString()}
					htmlHeight="640px"
					htmlWidth="340px"
				/>
			</Box>
			<HStack w="100%" justifyContent={"space-between"}>
				<Box>
					<Text fontWeight={600} fontSize={"md"}>
						Min Temp:
					</Text>
					<Text fontWeight={600} fontSize={"md"}>
						{MinTempData()}
					</Text>
				</Box>
				<Image src={TempRange} w="230px" rounded={4} h="20px" />
				<Box>
					<Text fontWeight={600} fontSize={"md"}>
						Max Temp:
					</Text>
					<Text fontWeight={600} fontSize={"md"}>
						{MAXTempData()} C
					</Text>
				</Box>
			</HStack>
		</VStack>
	);
};

export default FLIRImage;
