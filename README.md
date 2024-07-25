# useState: Thay đổi trạng thái của dữ liệu và giao diện được tự động cập nhật (render lại theo dữ liệu)
    => Để quản lý State trong React Function Component, chúng ta sử dụng Hook useState()
    Function useState trả về 1 mảng 2 phần tử [state, setState]
        state: giá trị khởi tạo & sau khi cập nhật của state
        setState: cập nhật state
        Tham số truyền vào useState là giá trị khởi tạo của state
    
    const [state, setState] = useState(initState);

# useEffect: Cho phép thực hiện các side effect bên trong các function component
    useEffect(() => {}); => Khi component được render hoặc các state của nó thay đổi code bên trong effect sẽ chạy
    useEffect(() => {}, []); Khi component được render code bên trong effect sẽ chạy
    useEffect(() => {}, [deps1, deps2, ..]); Khi component được render & các state trong mảng thay đổi thì code bên trong sẽ chạy.

    useEffect(() => {
        // mã ở đây sẽ chạy sau mỗi lần kết xuất
        return () => {
            // mã để làm sạch effect ở đây
        };
    });

# useLayoutEffect: chức năng tương tự useEffect, tuy nhiên khác trình tự thực hiện
    useEffect:
        1. Cập nhật lại state
        2. Cập nhật lại DOM
        3. Render lại UI
        4. Gọi cleanup nếu deps thay đổi
        5. Gọi useEffect callback
    useLayoutEffect:
        1. Cập nhật lại state
        2. Cập nhật lại DOM
        3. Gọi cleanup nếu deps thay đổi
        4. Gọi useLayoutEffect callback
        5. Render lại UI 

# useRef: Lưu giá trị bất kì vào một tham chiếu bên ngoài component
    const ref = useRef(initRef);

# memo: Không phải là một hook mà là một HOC (Higher Order Component)
    Ghi nhớ lại prop của component để quyết định có render lại component đó hay không
    export default memo(App)

# useCallback: Tránh tạo ra những hàm mới không cần thiết trong function component
    useCallback sử dụng khi component con được wrap bởi memo
# useMemo: Tránh thực hiện lại 1 logic không cần thiết 
# useReducer: Có thêm lựa chọn để sử dụng state, Sử dụng khi có các state phức tạp
    