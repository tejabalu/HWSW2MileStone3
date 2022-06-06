import {
	ChakraProvider,
	Box,
	VStack,
	HStack,
	extendTheme,
	Flex,
} from "@chakra-ui/react";
import FLIRImage from "./components/FLIRImage";
import OpticalImage from "./components/OpticalImage";
import SideBar from "./SideBar";
import "@fontsource/mulish";
import Header from "./components/Header";
import FireDetection from "./components/FireDetection";
import SmokeDetection from "./components/SmokeDetection";
import PeopleDetection from "./components/PeopleDetection";
import MapLocation from "./components/MapLocation";
import MapView from "./components/MapView";

const theme = extendTheme({
	fonts: {
		heading: `'Mulish', sans-serif`,
		body: `'Mulish', sans-serif`,
	},
});

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<HStack w={"100vw"} backgroundColor="gray.100">
				<SideBar />
				<VStack
					p={8}
					w="80%"
					minH={"100vh"}
					spacing={12}
					transform="translateX(17vw)"
				>
					<Header />
					<Flex w={"100%"} justifyContent="space-between">
						<Box></Box>
						<FireDetection />
						<SmokeDetection />
						<PeopleDetection />
						<MapLocation />
						<Box></Box>
					</Flex>
					<HStack justifyContent={"space-between"} w={"100%"}>
						<FLIRImage />
						<OpticalImage />
					</HStack>
					<MapView />
				</VStack>
			</HStack>
		</ChakraProvider>
	);
};

export default App;
