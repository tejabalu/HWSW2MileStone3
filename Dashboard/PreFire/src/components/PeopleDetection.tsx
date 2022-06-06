import { Center, theme, Text } from "@chakra-ui/react";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";
import firebaseApp from "../firebase.config";

const db = getDatabase(firebaseApp);
var dbref = ref(db, "peopleNum");

const useData = () => {
	const [data, setData] = useState(0);
	useEffect(() => {
		onValue(dbref, (snapshot) => {
			setData(snapshot.val());
		});
		console.log("Api called");
	}, [data]);
	return data;
};

const PeopleDetection = () => {
	return (
		<Center
			h={100}
			w={220}
			rounded={8}
			backgroundColor="white"
			border={`1px solid ${theme.colors.gray[300]}`}
			_hover={{
				borderColor: "#718096",
				cursor: "pointer",
				dropShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
			}}
			display="flex"
			flexDirection="column"
		>
			<Text
				fontWeight={600}
				fontSize={"xl"}
				textAlign="center"
				color={"#3751FF"}
			>
				Number of People:
			</Text>
			<Text
				fontWeight={600}
				fontSize={"3xl"}
				textAlign="center"
				color={"#3751FF"}
			>
				{useData()}
			</Text>
		</Center>
	);
};

export default PeopleDetection;
