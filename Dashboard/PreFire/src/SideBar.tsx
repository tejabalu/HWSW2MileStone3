import {
	Box,
	Button,
	ChakraProvider,
	Divider,
	HStack,
	Text,
	theme,
	VStack,
} from "@chakra-ui/react";
import { IoMdFlame } from "react-icons/io";
import { AiFillCamera } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import Buttons from "./components/Button";

const SideBar = () => {
	return (
		<ChakraProvider theme={theme}>
			<Box
				position={"static"}
				pos={"fixed"}
				// left={"0"}
				top={"0"}
				width={"17%"}
				height="100vh"
				bg="#363740"
			>
				<VStack spacing={1}>
					<HStack pt={6} pb={6} pl={6} pr={6}>
						<IoMdFlame color="#dde2ff" size={44} />
						<Text
							// marginLeft={2}
							// mr={2}
							color="gray.500"
							fontSize={"xl"}
							fontWeight="500"
						>
							FireCam Dashboard
						</Text>
					</HStack>

					<Button
						h={14}
						rounded={0}
						width={"100%"}
						backgroundColor="#3E4049"
						borderLeftColor={"white"}
						borderLeftWidth={4}
						alignContent="left"
						fontWeight={"bold"}
						_hover={{
							backgroundColor: "#3E4049",
							fontWeight: "bold",
						}}
					>
						<HStack>
							<AiFillCamera size={24} color="#dde2ff" />
							<Text
								pl={2}
								display="inline-block"
								color={"#dde2ff"}
								whiteSpace={["nowrap", "nowrap"]}
								width={"170px"}
								align="left"
							>
								Camera 1
							</Text>
						</HStack>
					</Button>

					<Buttons
						// pass camera icons here
						icons={<AiFillCamera size={24} color="#dde2ff" />}
						children="Camera 2"
					/>
					<Buttons
						icons={<AiFillCamera size={24} color="#dde2ff" />}
						children="Camera 3"
					/>
					<Buttons
						icons={<AiFillCamera size={24} color="#dde2ff" />}
						children="Camera 4"
					/>

					<Divider pt={2} pb={2} borderColor="gray.500" />

					<Buttons
						icons={<IoMdSettings size={24} color="#dde2ff" />}
						children="Settings"
					/>
					<Buttons
						icons={<IoIosNotifications size={24} color="#dde2ff" />}
						children="Notifications"
					/>
				</VStack>
			</Box>
		</ChakraProvider>
	);
};

export default SideBar;
