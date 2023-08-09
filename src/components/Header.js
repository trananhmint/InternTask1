import React, { useRef, useState } from 'react';
import './index.css';
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

} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Layout, Menu, theme, Image, Avatar } from 'antd';
import { Button, Input, Space, Table, Select } from 'antd';
// import DataPhongBan from './Data/DataPhongBan';
const { Header, Content, Footer, Sider } = Layout;
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
    department: 'Sales',
    name: 'Nguyen Van Quan Ly',
    number: '3',
    email: 'hrstaff@test.com',
    phone: '012345678',

  },
  {
    key: '2',
    id: '2',
    department: 'Marketing',
    name: 'Nguyen Van A',
    number: '0',
    email: 'marketing@test.com',
    phone: '012345678',
  },
  {
    key: '3',
    id: '3',
    department: 'Finance',
    name: 'Nguyen Van B',
    number: '3',
    email: 'finance@test.com',
    phone: '0128123',
  },
  {
    key: '4',
    id: '4',
    department: 'Human Resource',
    name: 'Nguyen Van C',
    number: '3',
    email: 'hr@test.com',
    phone: '012345678',
  },
  {
    key: '5',
    id: '5',
    department: 'Operations',
    name: 'Nguyen Van D',
    number: '4',
    email: 'op@test.com',
    phone: '012345678',
  },
  {
    key: '6',
    id: '6',
    department: 'Engineering',
    name: 'Nguyen Van E',
    number: '10',
    email: 'engineer@test.com',
    phone: '0987654',
  },
  {
    key: '7',
    id: '7',
    department: 'Customer Support',
    name: 'Nguyen Van F',
    number: '5',
    email: 'support@test.com',
    phone: '456724',
  },
  {
    key: '8',
    id: '8',
    department: 'Research & Development',
    name: 'Nguyen Van G',
    number: '3',
    email: 'research@test.com',
    phone: '8976756428',
  },
  {
    key: '9',
    id: '9',
    department: 'Quality Assureance',
    name: 'Nguyen Van E',
    number: '10',
    email: 'qa@test.com',
    phone: '09083456',
  },
  {
    key: '10',
    id: '10',
    department: 'Design',
    name: 'Nguyen Van A',
    number: '5',
    email: 'design@test.com',
    phone: '0795435',
  },
  {
    key: '11',
    id: '11',
    department: 'Chăm sóc khách hàng',
    name: 'Nguyen Van F',
    number: '7',
    email: 'abc@test.com',
    phone: '056781234',
  },

];

const items = [
  getItem('Nguyen Van Quan Ly', 'account',
    <Space wrap size={16}>
      <Avatar shape="square" size={30} icon={<Image src='https://cdn-icons-png.flaticon.com/512/168/168734.png' />} />
    </Space>
  ),
  getItem('Dashboard', '1', <HomeOutlined />),

  getItem('NHÂN VIÊN', 'sub1', <UserOutlined />, [
    getItem('Phòng Ban', '2', <TeamOutlined />),
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
const App = () => {
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
  <Select
    showSearch
    placeholder="Select a person"
    optionFilterProp="children"
    onChange={onChange}
    onSearch={onSearch}
    filterOption={(input, option) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
    }
    options={[
      {
        value: 'jack',
        label: 'Jack',
      },
      {
        value: 'lucy',
        label: 'Lucy',
      },
      {
        value: 'tom',
        label: 'Tom',
      },
    ]}
  />

  // //---AVATAR----
  // function generateAvatar(
  //   text,
  //   foregroundColor = "white",
  //   backgroundColor = "black"
  // ) {
  //   const canvas = document.createElement("canvas");
  //   const context = canvas.getContext("2d");

  //   canvas.width = 200;
  //   canvas.height = 200;

  //   // Draw background
  //   context.fillStyle = backgroundColor;
  //   context.fillRect(0, 0, canvas.width, canvas.height);

  //   // Draw text
  //   context.font = "bold 100px Assistant";
  //   context.fillStyle = foregroundColor;
  //   context.textAlign = "center";
  //   context.textBaseline = "middle";
  //   context.fillText(text, canvas.width / 2, canvas.height / 2);

  //   return canvas.toDataURL("image/png");
  // }

  // var name = document.getElementById("name").value;
  // // var bcgColor = document.getElementById("bcg-color").value;
  // // var textColor = document.getElementById("text-color").value;
  // var bcgColor = "black";
  // var textColor = "white";
  // const myNames = name.split("  ");
  // const initials = myNames.shift().charAt(0) + myNames.pop().charAt(0);
  // const nameInitials = initials.toUpperCase();

  // var avatarDiv = document.getElementById("avatarDiv");

  // if (avatarDiv.style.display === "none") {
  //   avatarDiv.style.display = "block";
  // }

  // document.getElementById("avatar").src = generateAvatar(
  //   nameInitials,
  //   textColor,
  //   bcgColor
  // );
  // const setAvatarByName = (name) => ({
  //   name = document.getElementById("name").value,
  //   // var bcgColor = document.getElementById("bcg-color").value;
  //   // var textColor = document.getElementById("text-color").value;
  //   bcgColor : "black",
  //   textColor = "white",
  //   myNames = name.split("  "),
  //   initials = myNames.shift().charAt(0) + myNames.pop().charAt(0);
  //   nameInitials = initials.toUpperCase(),

  //   // avatarDiv = document.getElementById("avatarDiv"),
  //   // render: () => 
  // })
  // //----AVATAR---


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


  const columns = [
    {
      title: '',
      // key: 'operation',
      width: 50,
      render: () => <EllipsisOutlined />,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 50,
      ...getColumnSearchProps('id'),
    },
    {
      title: <span><TeamOutlined />  Tên Phòng ban</span>,
      dataIndex: 'department',
      key: 'department',
      width: 250,
      ...getColumnSearchProps('department'),
    },
    {
      title: <span><UserOutlined />  Quản lý</span>,
      dataIndex: 'name',
      // <span>
      //   <Space size={16} wrap>
      //     <Avatar icon={<UserOutlined />} />
      //   </Space>
      // </span>,
      key: 'name',
      width: 200,

      ...getColumnSearchProps('name'),
      // fixed: 'left',
    },
    {
      title: <span><BorderlessTableOutlined />  Số nhân viên</span>,
      width: 150,
      dataIndex: 'number',
      key: 'number',

    },
    {
      title: <span><MailOutlined />  Email quản lý</span>,
      dataIndex: 'email',
      key: 'email',
      width: 200,
    },
    {
      title: <span><PhoneOutlined rotate="90" />  Số điện thoại</span>,
      dataIndex: 'phone',
      key: 'phone',
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
    //   key: '250px',
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

      }}
    >
      <Sider
        theme='light'
        collapsible collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        width={'20%'}

      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} style={{ width: '100%' }} />
      </Sider>
      <Layout
        style={{
          // minHeight: '100vh',
          backgroundColor: '#dddddd',

        }}
      >
        <Header
          style={{
            paddingLeft: 20,
            background: colorBgContainer,
            height: 60,
            margin: '0 0.5px 0.5px',
          }}
        >
          <span>Danh sách phòng ban</span>
          <button style={{ float: 'right', fontSize: '25px', color: '#1677ff' }}>
            <UploadOutlined
              rotate={90}
              style=
              {{
                border: '1px solid',
                borderColor: '#dddddd',
                padding: '5px',
                borderRadius: '10px',
              }}
            />
            {/* <LogoutOutlined
              style=
              {{
                border: '1px solid',
                borderColor: '#dddddd',
                padding: '5px',
                borderRadius: '10px',
              }}
            /> */}
          </button>
        </Header>
        <Content
          style={{
            margin: '0.5px 0.5px 0 0.5px',
            minWidth: '100vh',
            backgroundColor: 'white',
            // boxShadowC
          }}
        >
          <div
            style={{
              display: 'block',
              margin: '2px 50px',
              borderBottom: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: '#dddddd',
              backgroundColor: 'white',
              minHeight: '60px',
              flexWrap: 'nowrap',
            }}
          >
            <span
              style={{
                margin: '20px 0 0 50px',
                float: 'right',
                border: '1px',
                color: 'white',
                background: '#1677ff',
                padding: '8px 12px 8px 7px',
                borderRadius: '5px',

              }}
            >
              <PlusOutlined /> Thêm phòng ban
            </span>
          </div>
          <div
            style={{
              margin: '20px 0 80px 0',
              padding: '0 50px',
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Table
              columns={columns}
              dataSource={data}
              style={{ boxShadow: '2px 2px 5px 2px rgba(0,0,0,0.3)', }}
              scroll={{
                x: 1500,
                y: 400,
              }}
            />
          </div>


        </Content>
      </Layout>
    </Layout>


  );
};

export default App;