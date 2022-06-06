import {
	Box,
	Text,
	HStack,
	Image,
	VStack,
	Flex,
	Divider,
	Center,
} from "@chakra-ui/react";
import maps from "../assets/maps.png";

const MapView = () => {
	return (
		<HStack
			rounded="lg"
			border="1px solid"
			borderColor="gray.300"
			background="white"
			w={"100%"}
			justifyContent="space-between"
		>
			<Center p={8}>
				<VStack align={"left"}>
					<Text fontWeight={600} fontSize="xl" mb={-1}>
						Map View:
					</Text>
					<Image pt={4} src={maps} w={900} />
				</VStack>
			</Center>
			<Divider h={400} orientation="vertical" borderColor="gray.400" />
			<Flex
				align={"center"}
				justify={"center"}
				direction={"column"}
				h={450}
				justifyContent="space-between"
				pt={8}
				pb={8}
				pr={16}
			>
				<Box>
					<Text
						fontWeight={600}
						color="gray.500"
						textAlign={"center"}
					>
						GIX
					</Text>
					<Text
						borderBottom="1px solid"
						fontWeight={600}
						color="gray.600"
						fontSize="xl"
						mb={-2}
					>
						1st Floor
					</Text>
				</Box>
				<Box>
					<Text
						fontWeight={600}
						color="gray.500"
						textAlign={"center"}
					>
						Printed On
					</Text>
					<Text
						borderBottom="1px solid"
						borderColor="gray.400"
						fontWeight={600}
						color="gray.600"
						fontSize="xl"
						mb={-2}
					>
						2/20/2021
					</Text>
				</Box>
				<Box>
					<Text
						fontWeight={600}
						color="gray.500"
						textAlign={"center"}
					>
						Floor Area:
					</Text>
					<Text
						borderBottom="1px solid"
						fontWeight={600}
						color="gray.600"
						fontSize="xl"
						mb={-2}
					>
						21,270 sq. ft.
					</Text>
				</Box>
				<Box>
					<Text
						fontWeight={600}
						color="gray.500"
						textAlign={"center"}
					>
						Floor ID
					</Text>
					<Text
						borderBottom="1px solid"
						fontWeight={600}
						color="gray.600"
						fontSize="xl"
						mb={-2}
					>
						6515_01
					</Text>
				</Box>
			</Flex>
		</HStack>
	);
};

export default MapView;
