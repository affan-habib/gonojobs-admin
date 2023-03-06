import { DeleteOutlined } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useDispatch } from "react-redux";
import { callApi } from "store/reducers/apiSlice";

const DeleteProduct = ({ shouldDelete }) => {
  const dispatch = useDispatch();
  return (
    <IconButton
      color="error"
      onClick={() =>
        dispatch(
          callApi({
            operationId: `api/products/${shouldDelete}`,
            output: "itemDeleted",
            parameters: {
              method: "DELETE",
            },
          })
        )
      }
    >
      <DeleteOutlined />
    </IconButton>
  );
};

export default DeleteProduct;
