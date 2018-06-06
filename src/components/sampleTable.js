import React, { Component } from 'react';
import NavHeader from './commons/header';
import { Box, Table, TableRow } from 'grommet';

class SampleTable extends Component {

  constructor(){
    super();
    this.state = {
      data:  [1,2,3, 4,5,6,7,8,9,0]
    }
  }

  render() {
    return(
      <div>
        <NavHeader/><br/><br/><br/><br/>
        <Box margin='large'>
        <div >
          <Table scrollable={false}
          className='scrollable-tbody'
            selectable={false}
            responsive={false}>
            <thead>
              <TableRow>
              <th>
                  Name
                </th><th>
                  Name
                </th><th>
                  Name
                </th>
                <th>
                  Name
                </th><th>
                  Name
                </th><th>
                  Name
                </th><th>
                  Name
                </th>
                <th>
                  Name
                </th>
                <th>
                  Name
                </th>
                <th>
                  Name
                </th><th>
                  Name
                </th>
                <th>
                  Name
                </th>
                <th>
                  Note
                </th>
              </TableRow>
            </thead>
            <tbody>
              { this.state.data.map(d => {

                return (<TableRow key={d}>
                
                <td>
                  Alan
                </td><td>
                  Alan
                </td><td>
                  Alan
                </td><td>
                  Alan
                </td><td>
                  Alan
                </td>
                <td>
                  Alan
                </td>
                <td>
                  Alan
                </td>
                <td>
                  Alan
                </td><td>
                  Alan
                </td>
                <td>
                  Alan
                </td><td>
                  Alan
                </td>
                <td>
                  Alan
                </td>
                <td className='secondary'>
                  plays accordion
                </td>
              </TableRow>)
              })}
            </tbody>
          </Table>
          </div>
        </Box>
      </div>
    );
  }
}

export default SampleTable;