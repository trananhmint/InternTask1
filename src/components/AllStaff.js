import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import './index.css';
import {
  HomeOutlined,
  TeamOutlined,
  UserOutlined,
  UserAddOutlined,
  ClockCircleOutlined,
  SolutionOutlined,
  ScheduleOutlined,
  DollarOutlined,
  MailOutlined,
  UnorderedListOutlined,
  AuditOutlined,
  PlusOutlined,
  SearchOutlined,
  MoreOutlined,
  UploadOutlined,
  EllipsisOutlined,
  BorderlessTableOutlined,
  PhoneOutlined,
  AudioOutlined,
  DownOutlined,

} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Layout, Menu, theme, Image, Avatar, Badge } from 'antd';
import { Button, Input, Space, Table, Select, Tag, Dropdown, } from 'antd';
// import DataPhongBan from './Data/DataPhongBan';
const { Header, Content, Footer, Sider } = Layout;

const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1677ff',
    }}
  />
);
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const data = [
  {
    key: '1',
    id: '1',
    departments: 'Sales',
    name: 'Nguyen Van Quan Ly',
    number: '3',
    email: 'hrstaff@test.com',
    phone: '012345678',
    genders: ['Nam'],
    status: 'Active'
  },
  {
    key: '2',
    id: '2',
    departments: 'Marketing',
    name: 'Nguyen Van A',
    number: '0',
    email: 'marketing@test.com',
    phone: '012345678',
    genders: ['Nữ'],
    status: 'Active'
  },
  {
    key: '3',
    id: '3',
    departments: 'Finance',
    name: 'Nguyen Van B',
    number: '3',
    email: 'finance@test.com',
    phone: '0128123',
    genders: ['Nữ'],
    status: 'Inactive',
  },
  {
    key: '4',
    id: '4',
    departments: 'Human Resource',
    name: 'Nguyen Van C',
    number: '3',
    email: 'hr@test.com',
    phone: '012345678',
    genders: ['Nam'],
    status: 'Active',
  },
  {
    key: '5',
    id: '5',
    departments: 'Operations',
    name: 'Nguyen Van D',
    number: '4',
    email: 'op@test.com',
    phone: '012345678',
    genders: ['Nam'],
    status: 'Active',
  },
  {
    key: '6',
    id: '6',
    departments: 'Engineering',
    name: 'Nguyen Van E',
    number: '10',
    email: 'engineer@test.com',
    phone: '0987654',
    genders: ['Nam'],
    status: 'Inactive',
  },
  {
    key: '7',
    id: '7',
    departments: 'Customer Support',
    name: 'Nguyen Van F',
    number: '5',
    email: 'support@test.com',
    phone: '456724',
    genders: ['Nam'],
    status: 'Inactive',
  },
  {
    key: '8',
    id: '8',
    departments: 'Research & Development',
    name: 'G Nguyen Van ',
    number: '3',
    email: 'research@test.com',
    phone: '8976756428',
    genders: ['Nam'],
    status: 'Inactive',
  },
  {
    key: '9',
    id: '9',
    departments: 'Quality Assureance',
    name: 'Nguyen Van E',
    number: '10',
    email: 'qa@test.com',
    phone: '09083456',
    genders: ['Nam'],
    status: 'Active',
  },
  {
    key: '10',
    id: '10',
    departments: 'Design',
    name: 'Nguyen Van A',
    number: '5',
    email: 'design@test.com',
    phone: '0795435',
    genders: ['Nam'],
    status: 'Active',
  },
  {
    key: '11',
    id: '11',
    departments: 'Chăm sóc khách hàng',
    name: 'Nguyen Van F',
    number: '7',
    email: 'abc@test.com',
    phone: '056781234',
    genders: ['Nữ'],
    status: 'Active',
  },

];


const items = [
  getItem('Nguyen Van Quan Ly', 'account',
    <Space wrap size={16}>
      <Avatar shape="square" size={30} icon={<Image src='https://cdn-icons-png.flaticon.com/512/168/168734.png' />} />
    </Space>
  ),
  getItem(
    <Link to="/dashboard">Dashboard </Link>,
    'Dashboard',
    <HomeOutlined />),

  getItem('NHÂN VIÊN', 'sub1', <UserOutlined />, [
    getItem(
      <Link to="/phongban">Phòng Ban </Link>,
      'Phòng Ban',
      <TeamOutlined />),
    getItem('Phòng Ban Của Tôi', '3', <UserOutlined />),
    getItem('Toàn Bộ Nhân Viên', '4', <TeamOutlined />),
    getItem('Tạo Nhân Viên Mới', '5', <UserAddOutlined />)
  ]),

  getItem('TĂNG CA', 'sub2', <ClockCircleOutlined />, [
    getItem('Đơn Tăng Ca Nhân Viên', '5', <ClockCircleOutlined />),
    getItem('Đơn Tăng Ca Của Tôi', '6', <ClockCircleOutlined />),
  ]),

  getItem('NGHỈ PHÉP', 'sub3', <ScheduleOutlined />, [
    getItem('Đơn Nghỉ Phép Nhân Viên', '7', <ScheduleOutlined />),
    getItem('Đơn Nghỉ Phép Của Tôi', '8', <ScheduleOutlined />),
  ]),

  getItem('ĐƠN KHÁC', 'sub4', <MailOutlined />, [
    getItem('Danh Sách Đơn Khác', '9', <MailOutlined />),
    getItem('Đơn Khác Của Tôi', '10', <MailOutlined />),
  ]),

  getItem('QUẢN LÝ LƯƠNG', 'sub5', <DollarOutlined />, [
    getItem('Lương Nhân Viên', '11', <DollarOutlined />),
    getItem('Lương Của Tôi', '12', <DollarOutlined />),
  ]),

  getItem('HỢP ĐỒNG', 'sub6', <SolutionOutlined />, [
    getItem('Hợp Đồng Nhân Viên', '13', <AuditOutlined />),
    getItem('Hợp Đồng Của Tôi', '14', <SolutionOutlined />),
  ]),

  getItem('TUYỂN DỤNG', 'sub7', <UnorderedListOutlined />, [
    getItem('Danh Sách Ứng Viên', '15', <UnorderedListOutlined />),
  ]),

];

const filterStaff = [
  {
    label: 'Sales',
    key: 1,
  },
  {
    label: 'Marketing',
    key: 2,
  },
  {
    label: 'Finance',
    key: 3
  },
  {
    label: 'Engineering',
    key: 4,
  },
  {
    label: 'Human Resource',
    key: 5,
  },
  {
    label: 'Operations',
    key: 6
  },

];

export default function AllStaff() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef(null);
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };
  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };








  const getMoreOptions = () => ({});
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => {
    console.log('search:', value);
  };



  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={(e) => e.stopPropagation()}
      >
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{
              width: 90,
            }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{
              width: 90,
            }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({
                closeDropdown: false,
              });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              close();
            }}
          >
            close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined
        style={{
          color: filtered ? '#1677ff' : undefined,
        }}
      />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownOpenChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{
            backgroundColor: '#ffc069',
            padding: 0,
          }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });

  // const getSearchProps = (input)=> ({
  //   // <div>

  //   // </div>
  // });


  const columns = [
    {
      title: '',
      // key: 'operation',
      width: 50,
      render: () => <EllipsisOutlined />,
    },
    {
      title: '',
      dataIndex: 'status',
      key: 'status',
      width: 65,
      render: (text) => {
        let color = '';
        if (text === 'Active') {
          color = '#1677ff';
        }
        return (
          <Avatar
            style={{ backgroundColor: color }}
            icon={<UserOutlined />}
          />
        )
      }
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 50,
      ...getColumnSearchProps('id'),
    },
    {
      title: <span><UserOutlined />  Tên Nhân Viên</span>,
      dataIndex: 'name',
      key: 'name',
      width: 200,
      ...getColumnSearchProps('name'),
      render: (name) => {
        let letter = name[0].charAt(0).toUpperCase();
        let color = '#1677ff';
        return (
          <span style={{ alignItems: 'center', display: 'flex' }}>
            <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>{letter}</Avatar>
            <span style={{ margin: '0 3px' }}>{name}</span>
          </span>
        )
      }
    },
    {
      title: <span><TeamOutlined />  Tên Phòng ban</span>,
      dataIndex: 'departments',
      key: 'departments',
      width: 250,
      ...getColumnSearchProps('departments'),
      render: (department) => {
        let color = 'cyan';

        if (department === 'Sales') {
          color = 'orange';
        }
        if (department === 'Marketing') {
          color = 'lime';
        }
        if (department === 'Finance') {
          color = 'purple';
        }
        if (department === 'Human Resource') {
          color = 'red';
        }
        if (department === 'Operations') {
          color = 'yellow';
        }
        if (department === 'Engineering') {
          color = '	#2E8B57';
        }
        if (department === 'Customer Support') {
          color = '	#BA55D3';
        }
        if (department === 'Research & Development') {
          color = 'pink';
        }
        if (department === 'Quality Assurance') {
          color = 'green';
        }
        if (department === 'Design') {
          color = '#A52A2A';
        }
        if (department === 'Chăm sóc khách hàng') {
          color = '#4B0082';
        }

        return (
          <Badge color={color} text={<u>{department}</u>} />
        );
      },
    },
    {
      title: <span><PhoneOutlined rotate="90" />  Số Điện Thoại</span>,
      dataIndex: 'phone',
      key: 'phone',
      width: 200,
    },
    {
      title: <span>Giới Tính</span>,
      dataIndex: 'genders',
      key: 'genders',
      width: 100,
      render: (_, { genders }) => (
        <>
          {genders.map((gender) => {
            let color = gender.length > 5 ? 'geekblue' : 'blue';
            if (gender === 'Nữ') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={gender}>
                {gender.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: <span><MailOutlined />  Email quản lý</span>,
      dataIndex: 'email',
      key: 'email',
      width: 200,
    },
    {
      title: <span>Ngân Hàng</span>,
      dataIndex: 'bank',
      key: 'bank',
      width: 200,
    },
    {
      title: <span>Ngày Sinh</span>,
      dataIndex: 'birthday',
      key: 'birthday',
      width: 200,
    },
    {
      title: <span>Địa Chỉ</span>,
      dataIndex: 'address',
      key: 'address',
      width: 300,
      ...getColumnSearchProps('address'),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: <span>Quốc Gia</span>,
      dataIndex: 'nationality',
      key: 'nationality',
      width: 150,
    },
    {
      title: <span>TK Ngân Hàng</span>,
      dataIndex: 'bankNumber',
      key: 'bankNumber',
      width: 200,
    },


    // {
    //   title: 'Action',
    //   key: 'operation',
    //   width: 200,
    //   render: () => <a>action</a>,
    // },
    // {
    //   title: 'Address',
    //   dataIndex: 'address',
    //   key: 'address',
    //   ...getColumnSearchProps('address'),
    //   sorter: (a, b) => a.address.length - b.address.length,
    //   sortDirections: ['descend', 'ascend'],
    // },
  ];
  return (
    <Layout
      style={{
        // minHeight: '100vh',
        // height: '100vh',
        margin: '0 20px 0 0',
        border: 'none',
        borderStyle: 'none',
      }}
    >
      <Layout
        style={{

          // minHeight: '100vh',
          backgroundColor: '#dddddd',
          minWidth: '100vh',

        }}
      >
        <Content
          style={{
            margin: '0.5px 0.5px 0 0.5px',
            // minWidth: '100vh',
            borderStyle: 'none',
            border: 'none',

            backgroundColor: 'white',
            // boxShadowC
          }}
        >
          <div
            style={{
              display: 'block',
              // margin: '2px',
              border: '0.5px',
              // borderBottom: '1px',
              borderStyle: 'solid',
              borderColor: '#dddddd',
              // backgroundColor: 'white',
              minHeight: '60px',
              flexWrap: 'nowrap',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '2px 2px 2px 0.5px rgba(0,0,0,0.1)',
              margin: '0 0 20px 0'
            }}
          >
            <Input
              placeholder={'Tìm kiếm'}
              style={{
                // display: 'inline-block',
                margin: '20px',
                width: 200,
                borderStyle: 'none',
                borderColor: '#818181',
                borderBottom: 'solid 0.5px',
                borderRadius: 0,

                // display: 'flex',
                // alignItems: 'center',
              }}
            />
            <div>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={['click']}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space style={{ color: '#818181' }}>
                    Toàn bộ phòng ban
                    <DownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <Button
                style={{
                  marginLeft: 10,
                  borderColor: 'green',
                  border: 'solid 2px',
                  color: 'green'
                }}>
                <b>Làm mới</b>
              </Button>
            </div>
            <span
              style={{
                margin: '0px 20px 0 50px',
                // float: 'right',
                border: '1px',
                color: 'white',
                background: '#1677ff',
                padding: '8px 12px 8px 7px',
                borderRadius: '5px',
                display: 'flex',

              }}
            >
              <PlusOutlined

              /> Thêm phòng ban
            </span>
          </div>
          <Table
            columns={columns}
            dataSource={data}
            style={{ boxShadow: '2px 2px 5px 3px rgba(0,0,0,0.2)', }}
            scroll={{
              x: 1500,
              y: 400,
            }}
          />
          {/* <div
            style={{
              margin: '20px 0 80px 0',
              padding: '0 50px',
              minHeight: 360,
              background: colorBgContainer,
            }}
          >

          </div> */}
        </Content>
      </Layout>
    </Layout>


  );
}