import { Box, Center, Flex, Text, theme } from "@chakra-ui/react";

export const Flamesensor = () => {
	return (
		<Flex w={"100%"} justifyContent="space-between">
			<Box></Box>
			<Center
				h={100}
				w={220}
				rounded={8}
				backgroundColor="#f5f5f5"
				border={`1px solid ${theme.colors.gray[300]}`}
				_hover={{
					borderColor: "#718096",
					cursor: "pointer",
					dropShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
				}}
			>
				<Text
					fontWeight={600}
					// color={data.toString() === "0" ? "gray.500" : "orange.500"}
					textAlign="center"
					fontSize={"3xl"}
				>
					{/* {data.toString() === "0" */}? "Fire Not Detected"
					{/* : "Fire Detected"} */}
				</Text>
			</Center>
			<Center
				h={100}
				w={220}
				backgroundColor="#f5f5f5"
				rounded={8}
				border={`1px solid ${theme.colors.gray[300]}`}
				_hover={{
					borderColor: "#718096",
					cursor: "pointer",
					dropShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
				}}
			>
				<Text
					fontWeight={600}
					// color={data.toString() === "0" ? "gray.500" : "orange.500"}
					textAlign="center"
					fontSize={"3xl"}
				>
					{/* {data.toString() === "0" */}? "Smoke Not Detected"
					{/* : "Smoke Detected"} */}
				</Text>
			</Center>
			<Center
				h={100}
				w={220}
				rounded={8}
				border={`1px solid ${theme.colors.gray[300]}`}
				backgroundColor="#f5f5f5"
				// align vertical
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
				flexDirection={"column"}
				_hover={{
					borderColor: "#718096",
					cursor: "pointer",
					dropShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
				}}
			>
				<Text
					fontWeight={400}
					color={"#3751FF"}
					textAlign="center"
					fontSize={"xl"}
				>
					Number of People:
				</Text>
				<Text fontWeight={600} color={"#3751FF"} fontSize={"4xl"}>
					{/* {data.toString()} */}
				</Text>
			</Center>
			<Center
				h={100}
				w={220}
				rounded={8}
				border={`1px solid ${theme.colors.gray[300]}`}
				backgroundColor="#f5f5f5"
				_hover={{
					borderColor: "#718096",
					cursor: "pointer",
					dropShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
				}}
			>
				<Text
					fontWeight={600}
					// color={data.toString() === "0" ? "gray.500" : "orange.500"}
					textAlign="center"
					fontSize={"3xl"}
				>
					{/* {data.toString() === "0" */}? "Fire Not Detected"
					{/* : "Fire Detected"} */}
				</Text>
			</Center>

			<Box></Box>
		</Flex>
	);
};

export default Flamesensor;
