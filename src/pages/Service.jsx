import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from 'react-router-dom';
import { options } from '../data/nav'
import Page from "../app/services/pageCopy";

const Service = () => {
    const params = useParams();
    const serviceSlug = params.slug;
    const details = options.filter((title) => title.href === serviceSlug);
    console.log(details, '>>>>>>>>>')
    return (
        <>
            <main className="main-wrapper">
                <Page />
            </main>
        </>
    );
};

export default Service;