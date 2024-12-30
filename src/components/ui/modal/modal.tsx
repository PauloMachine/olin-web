import ReactDOM from "react-dom";
import { useModal } from "./modal.context";
import { StyledModal, StyledModalContainer } from "./modal.styles";
import Typography from "../typography";
import type { TModal } from "./modal.types";
import Flex from "../flex";
import { MdClose } from "react-icons/md";
import Button from "../button";

const Modal = ({ title, children, isLoading, onSave, onClose }: TModal) => {
  const { isOpen } = useModal();

  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <StyledModal>
      <StyledModalContainer align="flex-start" gap="25">
        {title && (
          <Flex direction="row" justify="space-between">
            <Typography style={{ color: "#000" }}>{title}</Typography>
            <MdClose style={{ cursor: "pointer" }} onClick={onClose} />
          </Flex>
        )}
        <Flex align="flex-start" gap="25" py="25">
          {children}
        </Flex>
        <Button variant="success" onClick={onSave} isLoading={isLoading}>
          salvar
        </Button>
      </StyledModalContainer>
    </StyledModal>,
    document.body
  );
};

export default Modal;
