using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Threading;
using System.Threading.Tasks;

namespace Application.Core
{
    public class Result<T>
    {
        public bool IsSuccessful { get; set; }

        public T Value { get; set; }

        public string Error { get; set; }

        public static Result<T> Success(T value) => new Result<T> { IsSuccessful = true, Value = value };

        public static Result<T> Failure(string error) => new Result<T> { IsSuccessful = false, Error = error };
    }
}