import {
	faTrash,
	faSignOutAlt,
	faEdit,
	faSpinner,
	faPlusSquare,
	faPhone,
	faEnvelope,
	faMapMarkedAlt,
	faLock,
} from "@fortawesome/free-solid-svg-icons";
import { icon, library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
	return library.add(
		faTrash,
		faSignOutAlt,
		faEdit,
		faSpinner,
		faPlusSquare,
		faPhone,
		faEnvelope,
		faMapMarkedAlt,
		faLock
	);
};

export default Icons;
