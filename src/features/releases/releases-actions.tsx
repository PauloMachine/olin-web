import Button from "src/components/ui/button";
import Flex from "src/components/ui/flex";
import { useModal } from "src/components/ui/modal/modal.context";
import { useAuth } from "../auth/auth.context";

const ReleasesActions = () => {
  const { openModal } = useModal();
  const { user } = useAuth();

  return (
    <Flex
      gap="24"
      wrap="wrap"
      align="center"
      direction="row"
      justify={user?.profile?.name === "funcionário" ? "center" : "flex-end"}
    >
      <Button size="large" variant="primary" onClick={openModal}>
        + lançamento
      </Button>
    </Flex>
  );
};

export default ReleasesActions;
