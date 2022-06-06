import { Text, HStack, Button } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
	// pass icons here
	icons: ReactNode;
	children: String;
}

const Buttons = (props: Props) => {
	return (
		<Button
			h={14}
			rounded={0}
			width={"100%"}
			backgroundColor="#363740"
			_hover={{
				backgroundColor: "#3E4049",
				fontWeight: "bold",
			}}
			alignContent="left"
		>
			<HStack>
				{props.icons}
				<Text
					pl={2}
					display="inline-block"
					color={"#dde2ff"}
					whiteSpace={["nowrap", "nowrap"]}
					width={"170px"}
					align="left"
				>
					{props.children}
				</Text>
			</HStack>
		</Button>
	);
};

export default Buttons;
