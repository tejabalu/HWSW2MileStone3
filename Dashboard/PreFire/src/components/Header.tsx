import { Divider, Text, HStack, Flex, Spacer } from "@chakra-ui/react";
import { BiSearch } from "react-icons/bi";
import { IoIosNotifications } from "react-icons/io";
import React, { useEffect } from "react";

const Header = () => {
	const [time, setTime] = React.useState("");

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return (
		<Flex width={"100%"}>
			<HStack>
				<Text mr={4} fontSize={"xl"} color="gray.900" fontWeight={500}>
					{" "}
					Floor 1: Camera 4 View
				</Text>
			</HStack>
			<Spacer />
			<HStack>
				<BiSearch size={24} color="#718096" />
				<IoIosNotifications size={24} color="#718096" />
				<Divider orientation="vertical" borderColor="gray.500" />
				<Text fontWeight={600} color="gray.500">
					As of {new Date().toLocaleDateString()}, {time}
				</Text>
			</HStack>
		</Flex>
	);
};

export default Header;
