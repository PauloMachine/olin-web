import Button from "src/components/ui/button";
import Flex from "src/components/ui/flex";
import { useModal } from "src/components/ui/modal/modal.context";

const FuelsActions = () => {
  const { openModal } = useModal();

  return (
    <Flex
      gap="24"
      wrap="wrap"
      align="center"
      direction="row"
      justify="flex-end"
    >
      <Button variant="primary" size="large" onClick={openModal}>
        + combustível
      </Button>
    </Flex>
  );
};

export default FuelsActions;
