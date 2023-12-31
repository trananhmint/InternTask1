import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
  AudioOutlined,

} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { Layout, Menu, theme, Image, Avatar } from 'antd';
import { Button, Input, Space, Table, Select, Tag, } from 'antd';
import Index from './components/Index';
import Dashboard from './components/Dashboard';
import PhongBan from './components/PhongBan';
import AllStaff from './components/AllStaff';
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



const items = [
  getItem(<b>Nguyen Van Quan Ly</b>, 'account',
      <Avatar shape="square" size={30} icon={<Image src='https://cdn-icons-png.flaticon.com/512/168/168734.png' />} />
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
    getItem(<Link to="/allstaff">Toàn Bộ Nhân Viên </Link>,'Toàn Bộ Nhân Viên', <TeamOutlined />),
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
      dataIndex: '',
      key: 'status',

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
    },
    {
      title: <span><TeamOutlined />  Phòng Ban</span>,
      dataIndex: 'department',
      key: 'department',
      width: 200,
      ...getColumnSearchProps('department'),
    },

    // {
    //   title: <span><BorderlessTableOutlined />  Số nhân viên</span>,
    //   width: 150,
    //   dataIndex: 'number',
    //   key: 'number',

    // },
    {
      title: <span><PhoneOutlined rotate="90" />  Số Điện Thoại</span>,
      dataIndex: 'phone',
      key: 'phone',
      width: 200,
    },
    {
      title: <span>Giới Tính</span>,
      dataIndex: 'gender',
      key: 'gender',
      width: 100,
    },
    {
      title: '',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {/* {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })} */}
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
        // backgroundColor: "unset",
        // minHeight: '100vh',
        // height: '100vh',

      }}
    >
      <Sider
        theme='light'
        collapsible collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        
        width={'265px'}
      // style={{}}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items} style={{ width: '100%' }} />
      </Sider>
      <Layout
        style={{
          // minHeight: '100vh',
          border: 'none',
          backgroundColor: '#dddddd',
          minWidth: '100vh',
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
          <span>Danh sách nhân viên</span>
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
          {/* <div
            style={{
              display: 'block',
              margin: '2px 50px',
              borderBottom: '1px',
              borderBottomStyle: 'solid',
              borderBottomColor: '#dddddd',
              backgroundColor: 'white',
              minHeight: '60px',
              flexWrap: 'nowrap',
              alignItems: 'center'
            }}
          >
            <div style={{display: 'inline-block', bottom: 10}}>
              <Input style={{display: 'inline-block', width: 200}}/>

            </div>
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
          </div> */}
          <div
            style={{
              margin: '20px 0 80px 0',
              padding: '0 50px',
              minHeight: 360,
              // border: 'none',
              // background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path='/' element={<Index/>} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/phongban' element={<PhongBan />} />
              <Route path='/allstaff' element={<AllStaff />} />
            </Routes>
          </div>
        

        </Content>
      </Layout>
    </Layout>


  );
};

export default App;