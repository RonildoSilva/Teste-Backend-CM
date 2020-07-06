echo "Port number :: "
read port
kill -9 $( lsof -i:$port -t)
