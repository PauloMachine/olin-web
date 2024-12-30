import Button from "src/components/ui/button";
import Flex from "src/components/ui/flex";
import { useModal } from "src/components/ui/modal/modal.context";
import { useGetProfiles } from "../profiles/profiles.hooks";

const UsersActions = () => {
  const { openModal } = useModal();
  const { isLoading } = useGetProfiles();

  return (
    <Flex
      gap="24"
      wrap="wrap"
      align="center"
      direction="row"
      justify="flex-end"
    >
      <Button
        size="large"
        variant="primary"
        onClick={openModal}
        isLoading={isLoading}
      >
        + usuário
      </Button>
    </Flex>
  );
};

export default UsersActions;
