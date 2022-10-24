import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const HomePage = () => {

    return (
        <>
            <div style={{backgroundColor: "#8080802b", backgroundRepeat: 'no-repeat', backgroundSize: "cover", position: "revert",
          height: '100vh',
          width: '100vw' }}>
                <div className="container">
                    <div>
                        <Table striped bordered hover variant="ligth">
                            <thead>
                                <tr>
                                    <th>Cod.</th>
                                    <th>Tipo de Esporte</th>
                                    <th>Cidade-Estado</th>
                                    <th>Proprietário</th>
                                    <th>Ação</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td colSpan={2}>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div> 
                </div>
            </div>
        </>
    );
};
export default HomePage;