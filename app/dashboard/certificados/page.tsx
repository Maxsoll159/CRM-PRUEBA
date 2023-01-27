import Image from "next/image";
import TableData from '../../../components/datatable/TableData';




export default function PageCertificado() {
    return (
        <div className="container mx-auto">
            <div className="w-full px-10">
                <h3 className="font-medium text-gray-500 w-full">CERTIFICADOS</h3>
                <div className="w-full bg-white p-5 mt-5">
                    <div className="w-full flex flex-col items-end">
                        <button className="rounded-lg bg-red-400 py-3 px-2 text-white font-bold flex items-center gap-3"><i className="fa-solid fa-circle-plus text-white "></i>Nuevo Ceriticado</button>
                    </div>
               
                </div>
                <TableData />
            
            </div>
        </div>
    )
}