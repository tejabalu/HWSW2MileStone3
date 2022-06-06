import { Center, theme, Text } from "@chakra-ui/react";
import { TiLocationArrow } from "react-icons/ti";

const MapLocation = () => {
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
				color="gray.500"
				mb={-3}
			>
				Get Directions
			</Text>
			<TiLocationArrow size={70} color="gray.900" />
		</Center>
	);
};

export default MapLocation;
